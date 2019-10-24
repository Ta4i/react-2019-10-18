import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Reviews from '../reviews'
import calcObjPropertyAverageInArr from '../../utils/calc-obj-property-average-in-arr'
import roundToHalf from '../../utils/round-to-half'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const rating = calcObjPropertyAverageInArr(restaurant.reviews, 'rating')
    const roundedRating = roundToHalf(rating)

    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rate value={roundedRating} allowHalf />
        <Reviews restaurant={restaurant} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
