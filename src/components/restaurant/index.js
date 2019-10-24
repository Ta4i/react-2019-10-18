import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Review from '../reviews'
import Rating from '../rating'

class Restaurant extends Component {
  constructor(props) {
    super(props)
    this.getRating = reviews => {
      let num = 0
      for (let i = 0; i < reviews.length; i++) {
        num = num + reviews[i].rating
      }
      return num / reviews.length
    }
  }
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rating number={this.getRating(restaurant.reviews)} />
        <Review reviews={restaurant.reviews} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
