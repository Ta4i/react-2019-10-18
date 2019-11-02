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
        </Col>
        <p>
          Price for {dish.amount} pcs: {dish.price * dish.amount} $
        </p>
      </Row>
    </Card>
  )
}

export default OrderCard
