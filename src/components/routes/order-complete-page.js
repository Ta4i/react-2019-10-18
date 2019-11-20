import React from 'react'
import {useSelector} from 'react-redux'
import {selectActiveUser} from '../../store/selectors/index'

function OrderCompletePage(props) {
  const user = useSelector(selectActiveUser)

  return (
    <div>
      <h2>
        Thank you, <b>{user.name}</b>! Our slaves started to gather your items!{' '}
        <br /> Let the gods of food guide you!
      </h2>
    </div>
  )
}

export default OrderCompletePage
