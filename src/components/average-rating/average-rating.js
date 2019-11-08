import React from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import Review from '../reviews/review'
import {connect} from 'react-redux'
import {selectReviewsData} from '../../store/selectors'
function AverageRating(props) {
  const {reviewsArr} = props

  const rawRating =
    reviewsArr.reduce((acc, {rating}) => {
      return acc + rating
    }, 0) / reviewsArr.length
  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate defaultValue={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = (store, ownProps) => {
  return {
    reviewsArr: selectReviewsData(store, ownProps),
  }
}

export default connect(mapStateToProps)(AverageRating)
