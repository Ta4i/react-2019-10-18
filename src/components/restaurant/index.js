import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Reviews from '../reviews'

class Restaurant extends Component {
  state = {
    rating: this._calcRating(),
  }

  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rate disabled={true} value={this.state.rating} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    )
  }

  _calcRating() {
    const {restaurant} = this.props
    const {reviews} = restaurant
    let rating = 0

    if (Array.isArray(reviews)) {
      let total = 0
      let count = 0
      for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].rating !== undefined) {
          total += reviews[i].rating
          count++
        }
      }
      rating = count > 0 ? total / count : 0
    }
    return rating
  }
}

export default Restaurant
