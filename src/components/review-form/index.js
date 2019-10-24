import React from 'react'

function ReviewForm(props) {
  let text = ''

  function handleInput(e) {
    if (text.length > 6) {
      text = ''
    } else {
      text += e.target.value
    }
  }

  function handleSubmit() {
    text.preventDefault()
    console.log('submit', text)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input
        // value={text} <- не разобрался как это работает :(
        onChange={handleInput}
        type={'text'}
      />
    </form>
  )
}

export default ReviewForm
