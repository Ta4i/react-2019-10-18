import React from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectReviews} from '../../store/selectors'

function AverageRating({reviewsId, reviews}) {
  let sum = 0
  reviewsId.forEach(function(reviewsId) {
    Object.keys(reviews).forEach(key => {
      if (reviews[key].id === reviewsId) {
        sum = sum + reviews[key].rating
      }
    })
  })
  const normalizedRating = Math.floor((sum * 2) / reviewsId.length) / 2
  return (
    <div>
      <Rate defaultValue={normalizedRating} disabled allowHalf />
    </div>
  )
}

const mapStateToProps = (store, ownProps) => ({
  reviews: selectReviews(store),
})

AverageRating.propTypes = {
  reviewsId: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default connect(mapStateToProps)(AverageRating)
