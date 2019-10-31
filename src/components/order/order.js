import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {List} from 'antd'

function Order(props) {
  const {orders} = props
  const data = Object.keys(orders).map(key => orders[key])
  const total = data.reduce((acc, item) => acc + item.sum, 0)

  return (
    <div>
      <List
        size="small"
        header={<div>Order</div>}
        footer={<div>Total: {total}$</div>}
        bordered
        dataSource={data}
        renderItem={item => {
          return (
            <List.Item>
              <List.Item.Meta title={item.name} />

              <div>
                &times; {item.amount} = {item.sum}$
              </div>
            </List.Item>
          )
        }}
      />
    </div>
  )
}

Order.propTypes = {
  orders: PropTypes.shape({
    id: PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      sum: PropTypes.number.isRequired,
    }),
  }),
}

const mapStateToProps = store => ({
  orders: store.orders,
})

export default connect(mapStateToProps)(Order)
