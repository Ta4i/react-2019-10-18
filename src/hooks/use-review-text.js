import {useState} from 'react'

export default () => {
  const [reviewText, setReviewText] = useState('')

  const handleInput = e => {
    setReviewText(e.target.value.length > 6 ? '' : e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', reviewText)
  }

  return {
    reviewText,
    handleInput,
    handleSubmit,
  }
}
