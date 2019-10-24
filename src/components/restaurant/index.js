import React, {Component} from 'react'
import {Typography, Col, Row} from 'antd'
import Menu from '../menu'
import Rating from '../rating'
import ReviewForm from '../review-form'
import Reviews from '../reviews'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Row>
          <Col span={18} push={1}>
            <Typography.Title level={2}>{restaurant.name}</Typography.Title>
            <Rating review={restaurant.reviews} />
            <Menu menu={restaurant.menu} />
          </Col>
          <Col span={6} push={2}>
            <ReviewForm />
            <Reviews reviews={restaurant.reviews} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Restaurant
