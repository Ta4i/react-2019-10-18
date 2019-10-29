// HOC higher order component
import React from 'react'
import useInput from '../hooks/use-input'

function input(OriginalComponent) {
  return props => {
    const {textInput, handleInput, handleSubmit} = useInput()

    return (
      <OriginalComponent
        {...props}
        textInput={textInput}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    )
  }
}

export default input
