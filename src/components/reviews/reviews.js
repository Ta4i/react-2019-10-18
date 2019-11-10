import React, {useEffect} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'
import {selectReviews} from '../../store/selectors'
import {useSelector, connect} from 'react-redux'
import {fetchReviews} from '../../store/ac'

function Reviews({id, fetchReviews}) {
  useEffect(() => {
    fetchReviews && fetchReviews()
  }, [fetchReviews])

  const reviews = useSelector(state => selectReviews(state, {id}))
  console.log(reviews)

  if (!reviews.length) {
    return <h1>Loading...</h1>
  } else {
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
}

Reviews.defaultProps = {
  reviews: [],
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchReviews: PropTypes.func,
}

const mapStateToProps = () => ({})

const mapDispatchActionToProps = {
  fetchReviews,
}

export default connect(
  mapStateToProps,
  mapDispatchActionToProps
)(Reviews)
