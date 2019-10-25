import {useState} from 'react'

function useForm(defaultText = '') {
  const [text, setText] = useState(defaultText)

  const handleInput = e => {
    if (e.target.value.length < 6) {
      setText(e.target.value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', this.state)
  }

  return {
    handleInput,
    handleSubmit,
    text,
  }
}

export default useForm
