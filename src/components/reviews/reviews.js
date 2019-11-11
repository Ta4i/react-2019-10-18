import React, {useEffect} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'
import {
  selectReviewsMap,
  selectReviewsLoaded,
  selectReviewsLoading,
  selectUsersLoaded,
  selectUsersLoading,
} from '../../store/selectors'
import {useDispatch, connect} from 'react-redux'
import {fetchReviews, fetchUsers} from '../../store/ac'

function Reviews(props) {
  const {
    reviews,
    reviewloading,
    reviewloaded,
    review,
    userloaded,
    userloading,
  } = props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchReviews())
    dispatch(fetchUsers())
  }, [dispatch])

  if (reviewloading || !reviewloaded || !userloaded || userloading) {
    return <h2>Loading...</h2>
  }
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(reviewId => (
          <Review
            reviewId={reviewId}
            key={reviewId}
            data-automation-id={`REVIEW_${reviewId}`}
          />
        ))}
        <ReviewForm id={review.id} />
      </Col>
    </Row>
  )
}

Reviews.defaultProps = {
  reviews: [],
}
const mapStateToProps = store => ({
  review: selectReviewsMap(store),
  reviewloaded: selectReviewsLoaded(store),
  reviewloading: selectReviewsLoading(store),

  userloaded: selectUsersLoaded(store),
  userloading: selectUsersLoading(store),
})

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchReviews: PropTypes.func,
}

export default connect(mapStateToProps)(Reviews)
