import {useState} from 'react'

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  const handle = e => {
    const text = e.target.value
    if (text.length <= 6) {
      setValue(text)
    }
  }

  return {
    value,
    handle,
  }
}

export default useInput
