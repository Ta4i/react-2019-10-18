import React, {Component} from 'react'
import {Typography, Row, Col, Rate} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import ReviewForm from '../review-form'
import AverageRate from '../average-rate'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const {reviews} = restaurant

    return (
      <div>
        <Row>
          <Col span={12}>
            <Typography.Title level={2}>{restaurant.name}</Typography.Title>
          </Col>
          <Col span={12}>
            <AverageRate reviews={reviews} />,
          </Col>
        </Row>
        <br />
        <ReviewForm />
        <br />
        <Typography.Title level={4}>{'Rewies:'}</Typography.Title>
        <Reviews reviews={restaurant.reviews} />
        <br />
        <Typography.Title level={4}>{'Menu:'}</Typography.Title>
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
