import {useState} from 'react'

<<<<<<< HEAD
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
=======
const nonEmpty = value => !!value

export default (initialValue = '', validate = nonEmpty) => {
  const [state, setState] = useState(initialValue)

  const handleChange = ev => setState(ev.target.value)

  return [state, handleChange, validate(state)]
}
>>>>>>> upstream/master
