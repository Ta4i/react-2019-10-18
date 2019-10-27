import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import AverageRating from '../average-rating'
import Reviews from '../reviews'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div style={{marginBottom: 30}}>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <AverageRating reviews={restaurant.reviews} />
        <Menu menu={restaurant.menu} />
        <br />
        <Reviews reviews={restaurant.reviews} />
        <ReviewForm />
      </div>
    )
  }
}

export default Restaurant
