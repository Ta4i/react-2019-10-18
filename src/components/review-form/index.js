import React from 'react'
import reviewText from '../../decorators/review-text'

function ReviewForm(props) {
  const {
    // from decorator
    reviewText,
    handleInput,
    handleSubmit,
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={reviewText} onChange={handleInput} type={'text'} />
    </form>
  )
}

export default reviewText(ReviewForm)
