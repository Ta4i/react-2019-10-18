import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import ReviewForm from '../review-form'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const sum = restaurant.reviews.reduce((acc, item) => {
      acc = acc + item.rating
      return acc
    }, 0)

    let averageRating = 0
    if (restaurant.reviews.length !== 0) {
      averageRating = sum / restaurant.reviews.length
    }

    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rate allowHalf defaultValue={averageRating} />
        <ReviewForm />
        <Reviews reviews={restaurant.reviews} />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
