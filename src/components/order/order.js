import React from 'react'
import {connect} from 'react-redux'
import {
  dishesInCartSelector,
  calculateDishesInCartTotalPrice,
} from '../../store/reducer/cart'

function Order(props) {
  const {dishes, totalPrice} = props

  return (
    <div>
      <div>
        {dishes.map(function(dish) {
          return (
            <h3>
              {dish.name} - Price: {dish.price} - Amount: {dish.count}
            </h3>
          )
        })}
      </div>
      {dishes.length === 0 ? '' : <h2>Total Price: {totalPrice}</h2>}
    </div>
  )
}

function mapStateToProps(state) {
  const dishes = dishesInCartSelector(state.cart, state.restaurants)
  const totalPrice = calculateDishesInCartTotalPrice(dishes)

  return {
    dishes,
    totalPrice,
  }
}

function mapDispatchToProps() {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
