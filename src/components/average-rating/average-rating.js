import React from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

function AverageRating(props) {
  const averageRating = useSelector(state => selectAverageRating(state, props))

  return (
    <div>
      <Rate value={averageRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  id: PropTypes.string.isRequired,
}

export default AverageRating
