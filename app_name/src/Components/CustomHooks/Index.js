import React from 'react'
import Customhook from './Customhook'

const Index = () => {
  const {inputRef, Clicked} = Customhook(null)
  return (
    <div>
        <input type='text' ref={inputRef}/>
        <button onClick={Clicked}>Clicked</button>
    </div>
  )
}

export default Index