import React, {useRef} from 'react'

const UseRef = () => {
  const inputRef = useRef();
  const handleSubmit = () => {
    console.log("clicked!!!!")
    inputRef.current.focus()
  }
  return (
    <div>
        <input type='text' ref={inputRef}/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UseRef