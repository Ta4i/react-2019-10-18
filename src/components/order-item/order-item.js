import React from 'react'

function OrderItem(props) {
  const {item} = props
  console.log(item)
  return (
    <div>
      <div>
        {item[0]} - {item[1]}
      </div>
    </div>
  )
}

export default OrderItem
