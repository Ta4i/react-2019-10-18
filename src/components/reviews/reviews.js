import React, {Component} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'
import {selectReviews} from '../../store/selectors'
import {connect} from 'react-redux'
import {fetchReviews} from '../../store/ac/index'
import {
  selectReviewsLoaded,
  selectReviewsLoading,
} from '../../store/selectors/index'

class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  }

  componentDidMount() {
    this.props.fetchReviews()
    console.log('component mounnted')
  }

  render() {
    const {reviews, id, reviewsLoaded, reviewsLoading} = this.props

    if (reviewsLoading || !reviewsLoaded) {
      return <h2>Loading...</h2>
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
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object),
  fetchReviews: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  reviews: selectReviews(state, ownProps),
  reviewsLoaded: selectReviewsLoaded(state),
  reviewsLoading: selectReviewsLoading(state),
})
const mapDispatchToProps = {
  fetchReviews,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
