import React from 'react'
import {connect} from 'react-redux'
import {List, Typography} from 'antd'
import _ from 'lodash'

function Order({cardDishes}) {
  const orderSummary = cardDishes.reduce(
    (acc, val) => acc + val.amount * val.price,
    0
  )
  const header = <Typography.Title level={4}>Order</Typography.Title>
  const footer = (
    <div>
      <Typography.Text strong>Amount:</Typography.Text> ${orderSummary}
    </div>
  )
  return (
    <List
      header={header}
      footer={footer}
      bordered
      dataSource={cardDishes}
      renderItem={({name, amount, price}) => (
        <List.Item>
          {amount} {name}: ${price}
        </List.Item>
      )}
    />
  )
}

const mapStateToProps = (store, ownProps) => {
  const filteredDishes = _.pickBy(store.cart, item => item !== 0)
  const filteredDishesIds = Object.keys(filteredDishes)
  const cartDishes = ownProps.menu
    .filter(item => filteredDishesIds.indexOf(item.id) !== -1)
    .map(({id, name, price}) => ({
      id,
      name,
      price,
      amount: filteredDishes[id],
    }))
  return {
    cardDishes: cartDishes,
  }
}

export default connect(mapStateToProps)(Order)
