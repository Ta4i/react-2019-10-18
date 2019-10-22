import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Reviews from '../reviews'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <ReviewForm />
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    )
  }
}

export default Restaurant
