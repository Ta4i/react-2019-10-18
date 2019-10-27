import React, {useEffect} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'

function Reviews({reviews, fetchReviews} /*props*/) {
  const foo = () => {
    fetchReviews && fetchReviews()
  }
  useEffect(foo, [])
  // Can't understand why this data attribute doesn't work like on antd components
  // So I moved it in review component
  const reviewsListContent = reviews.length ? (
    reviews.map(review => (
      <Review review={review} key={review.id} data-automation-id="TEST" />
    ))
  ) : (
    <div data-automation-id="REVIEW_NO_CONTENT_MSG">
      There are no reviews for now. Be first and create your own using form
      underneath.
    </div>
  )
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviewsListContent}
        <ReviewForm />
      </Col>
    </Row>
  )
}

Reviews.defaultProps = {
  reviews: [],
}

export default Reviews
