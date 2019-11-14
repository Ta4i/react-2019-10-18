import React, {Component} from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import Review from '../reviews/review'
import {connect} from 'react-redux'
import {selectRestaurantRating} from '../../store/selectors'

class AverageRating extends Component {
  render() {
    const {reviews, restaurantId, rating} = this.props

    console.log('rating', rating)

    return (
      <div>
        <Rate defaultValue={rating} disabled allowHalf />
      </div>
    )
  }
}

// AverageRating.propTypes = {
//   reviews: PropTypes.arrayOf(Review.propTypes.review).isRequired,
// }

const mapStateToProps = (state, ownProps) => {
  return {
    rating: selectRestaurantRating(state, ownProps),
  }
}

export default connect(mapStateToProps)(AverageRating)
