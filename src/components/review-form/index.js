import React from 'react'
import useReviewForm from '../../hooks/use-form'

function ReviewForm() {
  const {text, handleInput, handleSubmit} = useReviewForm('')

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={text} onChange={handleInput} type={'text'} />
    </form>
  )
}

export default ReviewForm
