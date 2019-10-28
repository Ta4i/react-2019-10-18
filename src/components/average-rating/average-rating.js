import React from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'

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
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default AverageRating
