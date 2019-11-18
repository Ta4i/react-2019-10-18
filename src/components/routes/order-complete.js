import React, {useContext} from 'react'
import {AppLocaleContext, UserNameContext} from '../../contexts'

function OrderComplete() {
  const lang = useContext(AppLocaleContext)
  const userName = useContext(UserNameContext)
  return (
    <h1
      style={{
        textAlign: 'center',
        padding: '128px 0',
      }}
    >
      {`${lang.userThankgiving}, ${userName}! ${lang.orderCompleteText}`}
      <span
        role={'img'}
        aria-label={'cook'}
        style={{
          padding: '0 12px',
        }}
      >
        👨‍🍳
      </span>
    </h1>
  )
}

export default OrderComplete
