import React from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import Review from '../reviews/review'
import {connect} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

function AverageRating({rating}) {
  /* const rawRating =
    reviews.reduce((acc, {rating}) => {
      return acc + rating
    }, 0) / reviews.length
  const normalizedRating = Math.floor(rawRating * 2) / 2*/
  return (
    <div>
      <Rate defaultValue={rating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(Review.propTypes.review).isRequired,
}

const mapStateToProps = (store, ownProps) => {
  return {rating: selectAverageRating(store, ownProps)}
}

export default connect(mapStateToProps)(AverageRating)
