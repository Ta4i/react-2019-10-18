import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Rate from '../rate'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <span>
          <Rate reviews={restaurant.reviews} />
        </span>
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
