import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import AverageRating from '../average-rating'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <AverageRating reviews={restaurant.reviews} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
