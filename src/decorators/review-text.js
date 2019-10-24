import React from 'react'
import useReviewText from '../hooks/use-review-text'

function reviewText(OriginalComponent) {
  return props => {
    const {reviewText, handleInput, handleSubmit} = useReviewText()

    return (
      <OriginalComponent
        {...props}
        reviewText={reviewText}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    )
  }
}

export default reviewText
