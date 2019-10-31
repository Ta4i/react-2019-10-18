import React from 'react'
import {List} from 'antd'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './order.css'

function Order(props) {
  const {orderData} = props || {}
  let totalPrice = 0

  return (
    <div className="order-container">
      <h3 className="orderTitle">Ваш заказ</h3>
      <List>
        {(() => {
          const listData = []

          for (let key in orderData) {
            if (orderData[key][0] > 0) {
              totalPrice = totalPrice + orderData[key][0] * orderData[key][2]
              listData.push(
                <List.Item key={key}>
                  <List.Item.Meta
                    title={orderData[key][1]}
                    description={`Цена: ${orderData[key][2]}$`}
                  />
                  <div>{orderData[key][0]}</div>
                </List.Item>
              )
            }
          }

          return listData
        })()}
      </List>
      {(() => {
        if (totalPrice > 0) {
          return <div className="totalOrderRow">Итого: {totalPrice}$</div>
        }
      })()}
    </div>
  )
}

Order.propTypes = {
  orderData: function(props, propName, componentName) {
    let prop = props[propName]
    let err = new Error(
      `Invalid prop ${propName} supplied to' ${componentName}. Validation failed.`
    )

    if (Object.keys(prop).length === 0) {
      return
    }

    if (typeof prop !== 'object') {
      return err
    }

    for (let key in prop) {
      if (!Array.isArray(prop[key]) || prop[key].length !== 3) {
        return err
      }

      if (typeof prop[key][0] !== 'number') {
        return err
      }

      if (typeof prop[key][1] !== 'string') {
        return err
      }

      if (typeof prop[key][2] !== 'number') {
        return err
      }
    }
  },
}

const mapStateToProps = (store, ownProps) => {
  return {orderData: store.order || {}}
}

export default connect(mapStateToProps)(Order)
