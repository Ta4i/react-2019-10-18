import React, {useEffect} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'
import {selectReviewsByRestaurantId} from '../../store/selectors'
import {connect} from 'react-redux'

function Reviews({reviews, restaurantId, fetchReviews} /*props*/) {
  const foo = () => {
    fetchReviews && fetchReviews()
  }
  useEffect(foo, [])
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
        <ReviewForm restaurantId={restaurantId} />
      </Col>
    </Row>
  )
}

Reviews.defaultProps = {
  reviews: [],
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchReviews: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  reviews: selectReviewsByRestaurantId(state, ownProps),
})

export default connect(mapStateToProps)(Reviews)
