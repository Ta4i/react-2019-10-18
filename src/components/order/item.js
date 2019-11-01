import React from 'react'

function Item(props) {
  const {id, name, price, quantity, total} = props

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
    </tr>
  )
}

export default Item
