import React from 'react'
import {Consumer} from '../../contexts/auth'

function OrderComplete() {
  return (
    <Consumer>
      {consumerValue => (
        <h1
          style={{
            textAlign: 'center',
            padding: '128px 0',
          }}
        >
          Thanks {consumerValue}! Your order is preparing
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
      )}
    </Consumer>
  )
}

export default OrderComplete
