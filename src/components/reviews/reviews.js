import React, {Component} from 'react'
import ReviewForm from '../review-form'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'
import {selectReviews} from '../../store/selectors'
import {connect} from 'react-redux'

class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  }

  componentDidMount() {
    console.log('component mounnted')
  }

  render() {
    const {reviews, id} = this.props
    console.log('rendering', reviews)

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
})

export default connect(mapStateToProps)(Reviews)
