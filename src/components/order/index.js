import React from 'react'
import styles from './order.css'
import Item from './item'
import Total from './total'
import {connect} from 'react-redux'

function Order(props) {
  const {dishesOrdered, dishesData} = props

  let lines = Object.keys(dishesOrdered).reduce(function(result, id) {
    if (dishesOrdered[id] > 0) {
      result.push(
        <Item
          key={id}
          name={dishesData[id].name}
          quantity={dishesOrdered[id]}
          price={dishesData[id].price}
          total={dishesOrdered[id] * dishesData[id].price}
        />
      )
    }
    return result
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Dish</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>{lines}</tbody>
      <tfoot>
        <Total dishesOrdered={dishesOrdered} dishesData={dishesData} />
      </tfoot>
    </table>
  )
}

const mapStateToProps = (store, ownProps) => {
  return {
    dishesOrdered: store.cart,
    dishesData: store.dishes,
  }
}

export default connect(mapStateToProps)(Order)
