import React from 'react'
import {Card, Typography, Row, Col} from 'antd'

const OrderCard = props => {
  const {dish} = props
  return (
    <Card>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} data-automation-id="DISH_NAME">
            {dish.name}
          </Typography.Title>
          <p>{dish.price} $</p>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <p>Amount: {dish.amount}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default OrderCard
