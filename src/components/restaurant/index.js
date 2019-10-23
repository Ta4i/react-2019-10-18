import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import ReviewList from '../review-list'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const reviewCount = restaurant.reviews.length
    const amountRating = restaurant.reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    )
    const averageRating = reviewCount ? amountRating / reviewCount : 0
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rate disabled defaultValue={averageRating} />
        <Typography.Text>Average Rating: {averageRating}</Typography.Text>
        <ReviewList reviews={restaurant.reviews} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
