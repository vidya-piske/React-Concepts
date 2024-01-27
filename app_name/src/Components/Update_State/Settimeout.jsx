import React, {useState} from 'react'

const Settimeout = () => {
  const[data, setData] = useState(0);
  const Clicked = () => {
    setData(data + 1,3000)
  }
  return (
    <div>
       <h1>{data}</h1>
       <button onClick={Clicked}>Clicked!!!!</button>
    </div>
  )
}

export default Settimeout