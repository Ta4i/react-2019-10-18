import React from 'react'
import PropTypes from 'prop-types'

export default function OrderTotal(props) {
  return props.sum > 0 && <div>Итого: {props.sum} $</div>
}

OrderTotal.propTypes = {
  sum: PropTypes.number.isRequired,
}
