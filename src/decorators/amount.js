// HOC higher order component
import React from 'react'
import useAmount from '../hooks/use-amount'
import PropTypes from 'prop-types'

function amount(OriginalComponent) {
  return props => {
    const {amount, increase, decrease} = useAmount()

    return (
      <OriginalComponent
        {...props}
        amount={amount}
        increase={increase}
        decrease={decrease}
      />
    )
  }
}

amount.propTypes = {
  OriginalComponent: PropTypes.func.isRequired,
}

export default amount
