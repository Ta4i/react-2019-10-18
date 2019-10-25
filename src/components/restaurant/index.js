import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import AverageRating from '../average-rating'
import ListReviews from '../list-reviews'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <ReviewForm />
        <AverageRating restaurant={restaurant.reviews} />
        <Menu menu={restaurant.menu} />
        <ListReviews restaurant={restaurant.reviews} />
      </div>
    )
  }
}

export default Restaurant
