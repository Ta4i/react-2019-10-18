import React, {useEffect} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'

function Reviews({reviews, fetchReviews, restaurantId} /*props*/) {
  const foo = () => {
    fetchReviews && fetchReviews()
  }
  useEffect(foo, [])
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review
            reviewId={review}
            key={review}
            data-automation-id={`REVIEW_${review}`}
          />
        ))}
        <ReviewForm />
      </Col>
    </Row>
  )
}

Reviews.defaultProps = {
  reviews: [],
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  // fetchReviews: PropTypes.func,
}

export default Reviews
