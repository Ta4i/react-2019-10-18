import React from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import Review from '../reviews/review'

function AverageRating({reviews}) {
  const rawRating =
    reviews.reduce((acc, {rating}) => {
      return acc + rating
    }, 0) / reviews.length
  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate defaultValue={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(Review.propTypes.review).isRequired,
}

export default AverageRating
