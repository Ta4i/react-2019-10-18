import React from 'react'
import reviewFormText from '../../decorators/reviewFormText'

function ReviewForm(props) {
  const {text, handleInput, handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={text} onChange={handleInput} type={'text'} />
    </form>
  )
}

export default reviewFormText(ReviewForm)
