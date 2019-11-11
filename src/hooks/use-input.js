import {useState} from 'react'

const nonEmpty = value => !!value

export default (initialValue = '', validate = nonEmpty) => {
  const [state, setState] = useState(initialValue)

  const handleChange = ev => setState(ev.target.value)
  const resetField = () => setState('')

  return [state, handleChange, validate(state), resetField]
}
