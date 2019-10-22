import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <ReviewForm />
        <Rate value={Restaurant.getRating(restaurant.reviews)} />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }

  static getRating(reviews) {
    const total = reviews
      .map(review => review.rating)
      .reduce((accumulator, currentValue) => accumulator + currentValue)

    return total / reviews.length
  }
}

export default Restaurant
