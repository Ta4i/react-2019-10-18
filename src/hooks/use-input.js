import {useState} from 'react'

function useInput(initialInput = '') {
  const [textInput, setTextInput] = useState(initialInput)

  const handleInput = e => {
    setTextInput(e.target.value.length > 6 ? '' : e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', textInput)
  }

  return {
    textInput,
    handleInput,
    handleSubmit,
  }
}

export default useInput
