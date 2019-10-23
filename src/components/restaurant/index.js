import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const reviews = restaurant.reviews
    const rate =
      reviews.reduce((prev, cur) => prev + cur.rating, 0) / reviews.length
    return (
      <div>
        <Typography.Title level={2}>
          {restaurant.name}
          <Rate allowHalf disabled value={rate} />
        </Typography.Title>
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
