import React, {useEffect} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'

function Reviews({reviews, fetchReviews} /*props*/) {
  const foo = () => {
    fetchReviews && fetchReviews()
  }
  useEffect(foo, [])
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
        <ReviewForm />
      </Col>
    </Row>
  )
}

Reviews.defaultProps = {
  reviews: [],
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(Review.propTypes.review).isRequired,
  fetchReviews: PropTypes.func,
}

export default Reviews
