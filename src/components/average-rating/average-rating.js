import React from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectAvgRating} from '../../store/selectors'

function AverageRating({avgRating}) {
  return (
    <div>
      <Rate defaultValue={avgRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = (store, ownProps) => {
  return {
    avgRating: selectAvgRating(store, ownProps),
  }
}

export default connect(mapStateToProps)(AverageRating)
