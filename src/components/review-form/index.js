import React, {Component} from 'react'
import useForm from '../../hooks/use-form'

function ReviewForm(props) {
  let {handleInput, handleSubmit, text} = useForm()

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={text} onChange={handleInput} type={'text'} />
    </form>
  )
}

export default ReviewForm
