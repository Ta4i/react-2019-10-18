import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Rating from '../rating'
import Reviews from '../reviews'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props

    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rating reviews={restaurant.reviews} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    )
  }
}

export default Restaurant
