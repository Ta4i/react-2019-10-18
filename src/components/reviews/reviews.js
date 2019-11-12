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
import {fetchReviews, fetchUsers} from '../../store/ac'
import Loader from '../loader'

function Reviews({id}) {
  const reviews = useSelector(state => selectReviews(state, {id}))
  const dispatch = useDispatch()
  const isUsersLoaded = useSelector(selectUsersIsLoaded)
  const isUsersLoading = useSelector(selectUsersIsLoading)
  const isReviewsLoaded = useSelector(selectReviewsIsLoaded)
  const isReviewsLoading = useSelector(selectReviewsIsLoading)
  useEffect(() => {
    !isUsersLoading && !isUsersLoaded && dispatch(fetchReviews())
    !isReviewsLoading && !isReviewsLoaded && dispatch(fetchUsers())
  }, [
    dispatch,
    isUsersLoading,
    isUsersLoaded,
    isReviewsLoading,
    isReviewsLoaded,
  ])

  if (!isUsersLoaded || !isReviewsLoaded) {
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
        <ReviewForm id={id} />
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
