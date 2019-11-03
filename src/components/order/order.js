import React from 'react'
import {connect} from 'react-redux'
import {Card, Descriptions} from 'antd'

function Order(props) {
  const {menu, order} = props
  // console.log(menu)
  const showOrder = !!Object.entries(order).length
  const orderedMenuItems = menu.filter(menuItem => {
    return order[menuItem.id]
  })

  return (
    showOrder && (
      <Card>
        <Descriptions title="Order" column={1} bordered>
          {Object.keys(order).map(orderId => (
            <Descriptions.Item
              key={orderId}
              label={
                getMenuItemInfo(menu, orderId).name +
                ', ' +
                order[orderId] +
                ' pc.'
              }
            >
              {getMenuItemInfo(menu, orderId).price * order[orderId]} $
            </Descriptions.Item>
          ))}
          <Descriptions.Item label="Total">
            {getOrderSum(order)} pc.{' '}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    )
  )
}

function getOrderSum(order) {
  // return order.reduce((sum, item) => sum = sum + item)
  let sum = 0
  for (let key in order) {
    sum += order[key]
  }
  return sum
}

function getMenuItemInfo(menu, id) {
  return menu.find(menuItem => menuItem.id === id)
}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.cart,
  }
}

export default connect(mapStateToProps)(Order)
