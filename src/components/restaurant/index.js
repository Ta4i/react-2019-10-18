import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Reviews from '../reviews'
import './style.css'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title className={'restaurantTitle'} level={2}>
          {restaurant.name}
        </Typography.Title>
        <Rate
          count={5}
          value={this.getAvgRateByRestaurantRevs(restaurant.reviews)}
          disabled={true}
        />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    )
  }

  getAvgRateByRestaurantRevs(reviews) {
    return (
      reviews.reduce((sum, current) => {
        return current.rating + sum
      }, 0) / reviews.length
    )
  }
}

export default Restaurant
