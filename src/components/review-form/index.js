import React from 'react'
import input from '../../decorators/input'

function ReviewForm(props) {
  const {inputValue, handleInput} = props

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={inputValue} onChange={handleInput} type={'text'} />
    </form>
  )
}

export default input(ReviewForm)
