import {useState} from 'react'

function useInput() {
  const [text, setText] = useState('')

  const handleInput = e => {
    const value = e.target.value.length > 6 ? '' : e.target.value
    setText(value)
  }

  return {
    text,
    handleInput,
  }
}

export default useInput
