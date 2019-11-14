import React from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
import {selectRestaurantRating} from '../../store/selectors'

function AverageRating(props) {
  const {reviews} = props

  const rating = useSelector(state => selectRestaurantRating(state, props))

  return (
    <div>
      <Rate defaultValue={rating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
}

export default AverageRating
