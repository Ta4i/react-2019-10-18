import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Reviews from '../reviews'
import {restaurants} from '../../fixtures'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const averageReviewValue = Math.round(
      restaurant.reviews.reduce((total, current) => total + current.rating, 0) /
        restaurant.reviews.length
    )

    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <h3>
          Average review: <Rate disabled value={averageReviewValue} />
        </h3>
        <Reviews reviewsList={restaurant.reviews} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
