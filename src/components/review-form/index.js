import React from 'react'
import useHandleInput from '../../hooks/use-handle-input'

function ReviewForm() {
  const {text, handleInput} = useHandleInput('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', {text})
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={text} onChange={handleInput} type={'text'} />
    </form>
  )
}

export default ReviewForm
