import React, { useRef } from 'react'

const Customhook = (defaultValue) => {
  const inputRef = useRef(defaultValue)
  const Clicked = () => {
    // eslint-disable-next-line no-unused-expressions
    inputRef.current.focus()
  }
  return {inputRef, Clicked}
}

export default Customhook