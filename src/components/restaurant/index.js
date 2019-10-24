import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Reviews from '../reviews'
class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Rate
          allowHalf
          disabled
          defaultValue={calculateMiddleRate(restaurant)}
        />
        <ReviewForm />
        <Typography.Title level={3}>Reviews</Typography.Title>
        <Reviews reviews={restaurant.reviews} />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

function calculateMiddleRate(rest) {
  var rating = 0
  if (rest.reviews.length) {
    for (var i = 0; i < rest.reviews.length; i++) {
      rating += rest.reviews[i].rating
    }
    console.log(rating / rest.reviews.length)
    return rating / rest.reviews.length
  }
  return 0
}

export default Restaurant
