import React, {useEffect} from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'
import {fetchReviews} from '../../store/ac'

function AverageRating(props) {
  const normalizedRating = useSelector(state =>
    selectAverageRating(state, props)
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (normalizedRating === 0) {
      dispatch(fetchReviews(props.id))
    }
  }, [dispatch, props.id, normalizedRating])
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
