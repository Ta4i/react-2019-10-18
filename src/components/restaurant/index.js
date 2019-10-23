import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    let rating = 0
    let arrRating = [],
      arrReport = []
    for (let i = 0; i < restaurant.reviews.length; i++) {
      arrRating.push(restaurant.reviews[i].rating)
      arrReport.push(restaurant.reviews[i].text)
    }
    rating = Math.round(
      arrRating.reduce((acc, c) => acc + c, 0) / arrRating.length
    )
    const listReviews = arrReport.map(text => <li>{text}</li>)
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <ReviewForm />
        <Rate value={rating} />
        <Menu menu={restaurant.menu} />
        <p>Reviews:</p>
        <ol>{listReviews}</ol>
      </div>
    )
  }
}

export default Restaurant
