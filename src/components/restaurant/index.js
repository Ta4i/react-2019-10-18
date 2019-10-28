import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
<<<<<<< HEAD
import ReviewForm from '../review-form'
import Reviews from '../reviews'
import {restaurants} from '../../fixtures'
=======
import Reviews from '../reviews'
import AverageRating from '../average-rating'
>>>>>>> upstream/master

class Restaurant extends Component {
  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
  }

  render() {
<<<<<<< HEAD
    const {restaurant} = this.props
    const averageReviewValue = Math.round(
      restaurant.reviews.reduce((total, current) => total + current.rating, 0) /
        restaurant.reviews.length
    )

    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <h3>
          Average review: <Rate disabled value={averageReviewValue} />
        </h3>
        <Reviews reviewsList={restaurant.reviews} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
=======
    const {
      restaurant: {name, reviews, menu},
    } = this.props

    if (this.state.error) {
      return (
        <Typography.Title type="danger">Something went wrong</Typography.Title>
      )
    }

    return (
      <div>
        <Typography.Title level={2}>{name}</Typography.Title>
        <AverageRating reviews={reviews} />
        <Reviews reviews={reviews} />
        <Menu menu={menu} />
>>>>>>> upstream/master
      </div>
    )
  }
}

export default Restaurant
