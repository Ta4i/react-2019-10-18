import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Reviews from '../reviews'

class Restaurant extends Component {
  average = nums =>
    Math.round((nums.reduce((a, b) => a + b) / nums.length) * 2) / 2

  render() {
    const {restaurant} = this.props
    const rating = restaurant.reviews.map(item => item.rating)
    return (
      <div>
        <Typography.Title level={2}>
          {restaurant.name}
          <Rate value={this.average(rating)} allowHalf disabled />
        </Typography.Title>
        <ReviewForm />
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    )
  }
}

export default Restaurant
