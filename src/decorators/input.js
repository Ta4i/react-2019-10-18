import React from 'react'
import useInput from '../hooks/use-input'

function input(OriginalComponent) {
  return props => {
    const {value, handle} = useInput()

    return (
      <OriginalComponent {...props} inputValue={value} handleInput={handle} />
    )
  }
}

export default input
