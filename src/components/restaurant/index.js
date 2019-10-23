import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    let rating = 0
    let arr = []
    for (let i = 0; i < restaurant.reviews.length; i++) {
      arr.push(restaurant.reviews[i].rating)
    }
    rating = Math.round(arr.reduce((acc, c) => acc + c, 0) / arr.length)
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <ReviewForm />

        <Rate value={rating} />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
