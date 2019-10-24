import React from 'react'
import {useState} from 'react'

function ReviewForm(props) {
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`The review form was submitted with ${text}`)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        type={'text'}
      />
    </form>
  )
}

export default ReviewForm
