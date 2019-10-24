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
    // @todo: move funcs to helpers
    const numRound = num => {
      return Math.round(parseFloat(num) * 100) / 100
    }
    const numRoundToHalf = num => {
      let d = Math.floor(num)
      let i = num % d
      return i < 0.25 ? d : i < 0.75 ? d + 0.5 : d + 1
    }
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rate disabled allowHalf defaultValue={numRoundToHalf(averageRating)} />
        <Typography.Text>
          Average Rating: {numRound(averageRating)}
        </Typography.Text>
        <ReviewList reviews={restaurant.reviews} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
