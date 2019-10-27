import {useState} from 'react'

function useReviewForm(initialText = '') {
  const [text, setText] = useState(initialText)

  const handleInput = e => {
    const text = e.target.value

    if (text.length) {
      console.log(`input: ${text}`)
      setText(text)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`submit: ${text}`)
  }

  return {
    text,
    handleInput,
    handleSubmit,
  }
}

export default useReviewForm
