import React, {useState} from 'react'

const ReviewForm = props => {
  const [input, setInput] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        console.log('submit', input)
      }}
    >
      <p>Add your review:</p>
      <input
        value={input}
        onChange={e => {
          e.target.value.length > 6 ? setInput('') : setInput(e.target.value)
        }}
        type={'text'}
      />
    </form>
  )
}

export default ReviewForm
