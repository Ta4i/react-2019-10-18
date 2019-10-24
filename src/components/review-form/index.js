import React, {useState} from 'react'

function ReviewForm() {
  const [text, setText] = useState('')

  function handleInput(e) {
    const inputValue = e.target.value.length > 6 ? '' : e.target.value
    setText(inputValue)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={text} onChange={handleInput} type={'text'} />
    </form>
  )
}

export default ReviewForm
