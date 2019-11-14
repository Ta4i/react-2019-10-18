import React, {useEffect} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'
import {
  selectReviews,
  selectReviewsIsLoaded,
  selectReviewsIsLoading,
  selectUsersIsLoaded,
  selectUsersIsLoading,
} from '../../store/selectors'
import {useDispatch, useSelector} from 'react-redux'
import {loadDataForReviews} from '../../store/ac'
import Loader from '../loader'

function Reviews(props) {
  const reviews = useSelector(state => selectReviews(state, props))
  const dispatch = useDispatch()
  const isUsersLoading = useSelector(selectUsersIsLoading)
  const isReviewsLoading = useSelector(store =>
    selectReviewsIsLoading(store, props)
  )
  useEffect(() => {
    dispatch(loadDataForReviews(props.id))
  }, [dispatch, props.id])

  if (isUsersLoading || isReviewsLoading) {
    return <Loader />
  }

  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review
            review={review}
            key={review.id}
            data-automation-id={`REVIEW_${review.id}`}
          />
        ))}
        <ReviewForm id={props.id} />
      </Col>
    </Row>
  )
}

Reviews.defaultProps = {
  reviews: [],
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchReviews: PropTypes.func,
}

export default Reviews
