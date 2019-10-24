import React, {useState} from 'react'
import {Typography} from 'antd'

const {Text} = Typography

function ReviewForm() {
  const [text, setText] = useState('')
  const handleInput = e =>
    e.target.value.length > 6 ? setText('') : setText(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    console.log({text})
  }
  return (
    <div>
      <Text>Add your review:</Text>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleInput} type={'text'} />
      </form>
    </div>
  )
}
export default ReviewForm
