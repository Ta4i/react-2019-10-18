import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'antd'
import OrderItem from './order-item'

import {connect} from 'react-redux'

function Order(props) {
  const {order} = props
  const dataArr = Object.keys(order).map(key => order[key])
  const totalPrice = dataArr.reduce((acc, item) => acc + item.totalPrice, 0)

  if (totalPrice === 0) return null

  return (
    <div>
      {dataArr.map((itemInfo, index) => (
        <OrderItem itemInfo={itemInfo} key={index} />
      ))}

      <Card size="small">
        <p> Total price: {totalPrice}</p>
      </Card>
    </div>
  )
}

Order.propTypes = {
  order: PropTypes.object.isRequired,
}

const mapStateToProps = store => ({
  order: store.order,
})

export default connect(mapStateToProps)(Order)
