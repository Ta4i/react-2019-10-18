import {useState} from 'react'
export default (initialValue = 0) => {
  const [state, setState] = useState(initialValue)

  const clearField = () => setState(0)

  return [state, setState, clearField]
}
