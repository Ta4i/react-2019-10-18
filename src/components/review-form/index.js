import React, {useState} from 'react'

function ReviewForm() {
  const [text, setText] = useState('')

  const handleInput = e => {
    setText(e.target.value.length > 6 ? '' : e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Text value on submit: ', text)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={text} onChange={handleInput} type="text" />
    </form>
  )
}

export default ReviewForm
