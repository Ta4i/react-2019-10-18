import React, {useState} from 'react'

function ReviewForm() {
  const [text, setText] = useState('')
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        console.log('submit', text)
      }}
    >
      <p>Add your review:</p>
      <input
        value={text}
        onChange={e => setText(e.target.value.length > 6 ? '' : e.target.value)}
        type={'text'}
      />
    </form>
  )
}

export default ReviewForm
