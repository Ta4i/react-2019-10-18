import React, {useState} from 'react'

function ReviewForm(props) {
  const [reviewText, setReviewText] = useState('')

  const handleReviewTextChange = function(e) {
    setReviewText(e.target.value)
  }

  const handleReviewAddSubmit = function(e) {
    alert(`Thank you for your request: ${reviewText}`)
    setReviewText('')
    e.preventDefault()
  }

  return (
    <form onSubmit={handleReviewAddSubmit}>
      <p>Write some comments please:</p>
      <input value={reviewText} onChange={handleReviewTextChange} type="text" />
    </form>
  )
}

export default ReviewForm
