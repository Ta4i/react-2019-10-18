import {useState} from 'react'

function useHandleInput(value = '') {
  const [text, setText] = useState(value)

  const handleInput = e => {
    setText(e.target.value.length > 6 ? '' : e.target.value)
  }

  return {
    text,
    handleInput,
  }
}

export default useHandleInput
