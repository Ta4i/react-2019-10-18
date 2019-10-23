import React, {Component, useState} from 'react'

function ReviewForm() {
  const {text, setText} = useState('')

  const handleInput = e => {
    const enteredText = e.target.value
    if (enteredText.length < 6) {
      setText('')
    } else {
      setText(enteredText)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', text)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input
        value={text}
        onChange={handleInput}
        type={'text'}
      />
    </form>
  )

}

export default ReviewForm
