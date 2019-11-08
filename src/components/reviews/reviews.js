import React, {useEffect} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectReviewsData} from '../../store/selectors'

function Reviews({fetchReviews, reviewsArr} /*props*/) {
  const foo = () => {
    fetchReviews && fetchReviews()
  }
  useEffect(foo, [])
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviewsArr.map(review => (
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
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviewsArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchReviews: PropTypes.func,
}

const mapStateToProps = (store, ownProps) => {
  return {
    reviewsArr: selectReviewsData(store, ownProps),
  }
}

export default connect(mapStateToProps)(Reviews)
// export default Reviews
