import React from 'react'
import i18n from '../../decorators/i18n'

function OrderComplete({t}) {
  return (
    <h1
      style={{
        textAlign: 'center',
        padding: '128px 0',
      }}
    >
      {t('Thanks')}
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

export default i18n(OrderComplete)
