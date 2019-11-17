import React from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

function AverageRating(props) {
  const normalizedRating = useSelector(state =>
    selectAverageRating(state, props)
  )
  // return <p>Disabled</p>
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  id: PropTypes.string.isRequired,
}

export default AverageRating
