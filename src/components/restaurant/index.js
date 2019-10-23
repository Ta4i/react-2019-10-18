import React, {Component} from 'react'
import {Typography, Rate, Row, Col} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import Reviews from '../reviews'
import {roundToHalf} from '../helpers/Math'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const sumOfRatings = restaurant.reviews.reduce(
      (sum, item) => (sum += item.rating),
      0
    )

    // в Rate обнаружил такой баг - даже если мы выставляем флаг allowHalf,
    // и передаем ему 4.6 - он не округляет сам до 4.5. сделаем это сами ;)
    const averageRating = roundToHalf(sumOfRatings / restaurant.reviews.length)

    return (
      <div>
        <Row gutter={24}>
          <Col span={16}>
            <Typography.Title level={3}>
              Welcome to {restaurant.name}
            </Typography.Title>
          </Col>
          <Col span={8}>
            Average Rating:{' '}
            <Rate disabled allowHalf defaultValue={averageRating} />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={16}>
            <Typography.Title level={4}>Our Menu:</Typography.Title>
            <Menu menu={restaurant.menu} />
          </Col>
          <Col span={8}>
            <Typography.Title level={4}>Reviews:</Typography.Title>
            <Reviews reviews={restaurant.reviews} />
            <Typography.Title level={4}>Add your review:</Typography.Title>
            <ReviewForm />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Restaurant
