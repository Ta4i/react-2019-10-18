import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const amountRating = restaurant.reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    )
    const averageRating = amountRating
      ? amountRating / restaurant.reviews.length
      : 0
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rate disabled defaultValue={averageRating} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
