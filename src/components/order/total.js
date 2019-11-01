import React from 'react'

function Total(props) {
  const {dishesOrdered, dishesData} = props

  let total = 0
  for (let key in dishesOrdered) {
    if (dishesOrdered.hasOwnProperty(key)) {
      total += dishesOrdered[key] * dishesData[key].price
    }
  }

  return (
    <tr>
      <td colSpan={3}>Total for your order</td>
      <td>{total}</td>
    </tr>
  )
}

export default Total
