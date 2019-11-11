import React, {useEffect} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'
import {
  selectReviews,
  selectReviewsLoaded,
  selectReviewsLoading,
  selectUsersLoaded,
  selectUsersLoading,
  selectUsersMap,
} from '../../store/selectors'
import {connect} from 'react-redux'
import {fetchReviews, fetchUsers} from '../../store/ac'

function Reviews({
  id,
  fetchReviews,
  fetchUsers,
  reviews,
  reviewsLoading,
  reviewsLoaded,
  usersLoading,
  usersLoaded,
}) {
  useEffect(() => {
    fetchReviews && fetchReviews()
    fetchUsers && fetchUsers()
  }, [fetchReviews, fetchUsers])

  if (reviewsLoading || !reviewsLoaded || (usersLoading || !usersLoaded)) {
    return <h1>Loading...</h1>
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
  reviews: PropTypes.array.isRequired,
  fetchReviews: PropTypes.func,
}

const mapStateToProps = (store, ownProps) => ({
  reviews: selectReviews(store, {id: ownProps.id}),
  reviewsLoading: selectReviewsLoading(store),
  reviewsLoaded: selectReviewsLoaded(store),
  usersLoading: selectUsersLoading(store),
  usersLoaded: selectUsersLoaded(store),
})

const mapDispatchToProps = {
  fetchReviews,
  fetchUsers,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
