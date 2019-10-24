import {useState} from 'react'

function useReviewFormText(defaultText = '') {
  const [text, setText] = useState(defaultText)

  const handleInput = e =>
    setText(e.target.value.length > 6 ? '' : e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', text)
  }

  return {text, handleInput, handleSubmit}
}

export default useReviewFormText
