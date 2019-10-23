import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import DisabledRating from '../disabled-rating'
import Reviews from '../reviews'

const calcAvgRatingByReviews = (reviews) => {
  const sum = reviews.reduce((sum, review) => {
    return sum + review.rating
  }, 0)

  return sum / reviews.length
}

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props

    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <DisabledRating rating={calcAvgRatingByReviews(restaurant.reviews)}/>
        <Menu menu={restaurant.menu}/>
        <Reviews reviews={restaurant.reviews}/>
        <ReviewForm/>
      </div>
    )
  }
}

export default Restaurant
