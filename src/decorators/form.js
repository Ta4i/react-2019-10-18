// HOC higher order component
import React from 'react'
import useInput from '../hooks/use-input'
// import useSubmitForm from '../hooks/use-submit-form'

function form(OriginalComponent) {
  return props => {
    const {text, handleInput} = useInput()
    const handleSubmit = e => {
      e.preventDefault()
      console.log('submit', text)
    }

    return (
      <OriginalComponent
        {...props}
        text={text}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    )
  }
}

export default form
