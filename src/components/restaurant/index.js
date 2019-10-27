import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import AverageRating from '../average-rating'
import PropTypes from 'prop-types'

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
      </div>
    )
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  reviews: PropTypes.array,
  menu: PropTypes.array,
}

export default Restaurant
