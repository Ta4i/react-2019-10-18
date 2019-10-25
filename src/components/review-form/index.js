import React from 'react'
import input from '../../decorators/input'

function ReviewForm(props) {
  const {textInput, handleSubmit, handleInput} = props

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={textInput} onChange={handleInput} type={'text'} />
    </form>
  )
}

export default input(ReviewForm)
