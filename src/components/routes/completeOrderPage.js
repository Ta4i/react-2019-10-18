import React from 'react'

function CompleteOrderPage(props) {
  const phoneNumber = props.match.params.phoneNumber
  const address = props.match.params.address

  return (
    <div>
      <div>Ваш заказ принят!</div>
      <div>Телефон: {phoneNumber}</div>
      <div>Адрес: {address}</div>
    </div>
  )
}

export default CompleteOrderPage
