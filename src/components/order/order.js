import React from 'react'
import {connect} from 'react-redux'

function Order(props) {
  const {menu, cart} = props

  let order = getOrder(cart, menu)

  return (
    <table className="table-condensed table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Dish</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {order.map(dish => (
          <tr key={dish.id}>
            <td>{dish.name}</td>
            <td>{dish.amount}</td>
            <td>{dish.price * dish.amount}$</td>
          </tr>
        ))}
        <tr>
          <td>Sum:</td>
          <td>
            {order.reduce((accumulator, dish) => accumulator + dish.amount, 0)}
          </td>
          <td>
            {order.reduce(
              (accumulator, dish) => accumulator + dish.price * dish.amount,
              0
            )}
            $
          </td>
        </tr>
      </tbody>
    </table>
  )
}

function getOrder(cart, menu) {
  let order = []
  Object.keys(cart).forEach((key, value) => {
    let dishInMenu = menu.find(dish => dish.id === key)
    order.push({...dishInMenu, amount: cart[key]})
  })

  return order
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Order)
