import React from 'react'
import useReviewFormText from '../hooks/use-reviewFormText'

function reviewFormText(OriginalComponent) {
  return props => {
    const {text, handleInput, handleSubmit} = useReviewFormText()

    return (
      <OriginalComponent
        {...props}
        text={text}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    )
  }
}

export default reviewFormText
