import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Reviews from '../reviews'

class Restaurant extends Component {
  ratingCalculator(reviews) {
    const numberOfReviews = reviews.length
    let usersRating = 0
    reviews.forEach(review => {
      usersRating += review.rating
    })

    return usersRating / numberOfReviews
  }

  render() {
    const {restaurant} = this.props

    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rate allowHalf value={this.ratingCalculator(restaurant.reviews)} />
        <Reviews reviews={restaurant.reviews} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
