import React from 'react'
import {Card, Typography, Row, Col, Table} from 'antd'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function Order(props) {
  const data = []
  Object.keys(props.amount).forEach(item => {
    if (props.amount[item] > 0) {
      data.push({
        name: props.name[item],
        price: props.price[item],
        amount: props.amount[item],
        totalAmount: props.amount[item] * props.price[item],
      })
    }
  })
  if (Object.keys(props.amount).length && data.length) {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Price',
        dataIndex: 'price',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
      },
      {
        title: 'Total amount',
        dataIndex: 'totalAmount',
      },
    ]

    const totalPrice = data.reduce((previousValue, item) => {
      return previousValue + item.totalAmount
    }, 0)

    return (
      <Table
        columns={columns}
        dataSource={data}
        footer={() => `Total: ${totalPrice}`}
      />
    )
  } else {
    return null
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    amount: store.cart || 0,
    name: store.dishName,
    price: store.price,
  }
}

export default connect(mapStateToProps)(Order)
