import React from 'react'
import {connect} from 'react-redux'
import {List} from 'antd'
import _ from 'lodash'

function Order({cardDishes}) {
  const orderSummary = cardDishes.reduce(
    (acc, val) => acc + val.amount * val.price,
    0
  )
  return (
    <List
      header={<div>Order</div>}
      footer={<div>Amount: ${orderSummary}</div>}
      bordered
      dataSource={cardDishes}
      renderItem={({name, amount, price}) => (
        <List.Item>
          {name}: {amount} ${price}
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
