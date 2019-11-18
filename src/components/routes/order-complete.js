import React from 'react'
import {Consumer as AuthConsumer} from '../../contexts/auth'
import {Consumer as InterConsumer} from '../../contexts/inter'

function OrderComplete() {
  return (
    <AuthConsumer>
      {consumerValue => (
        <InterConsumer>
          {language => (
            <h1
              style={{
                textAlign: 'center',
                padding: '128px 0',
              }}
            >
              {language.thanks} {consumerValue}! {language.yoip}
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
        </InterConsumer>
      )}
    </AuthConsumer>
  )
}

export default OrderComplete
