import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'antd'
import OrderTable from './order-table'
import {connect} from 'react-redux'

function Order({cart, menu}) {
  const data = (function() {
    return menu
      .filter(dish => cart[dish.id]) // to filter out the dishes added to the cart
      .map(({name, id, price}) => ({
        name,
        key: id,
        count: cart[id],
        totalPrice: cart[id] * price,
      }))
  })()

  return (
    <div style={{display: data.length ? 'block' : 'none'}}>
      <Row>
        <Col offset={12}>
          <OrderTable data={data} />
        </Col>
      </Row>
    </div>
  )
}

Order.propTypes = {
  cart: PropTypes.object,
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = store => ({
  cart: store.cart,
  menu: store.restaurants[0].menu,
})

export default connect(mapStateToProps)(Order)
