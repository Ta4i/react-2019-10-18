import React from 'react'
import {connect} from 'react-redux'
import {List} from 'antd'

function Order() {
  return (
    <List
      header={<div>Order</div>}
      footer={<div>Amount: $12</div>}
      bordered
      dataSource={[{name: 'ssss', amount: 4, price: 12}]}
      renderItem={({name, amount, price}) => (
        <List.Item>
          {name}: {amount} ${price}
        </List.Item>
      )}
    />
  )
}

export default connect()(Order)
