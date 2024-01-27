import React, {useState} from 'react'

const Practise1 = () => {
  const [data, setData] = useState({
    name: 'vidya',
    age: 25,
    hobby: 'listening music'
  })
  const displayedData = () => {
    setData({...data, name: 'vidya_piske'})
  } 
  return (
    <div>
        <h1>Practise</h1>
        <h4>{data.name}</h4>
        <h4>{data.age}</h4>
        <h4>{data.hobby}</h4>
        <button onClick={displayedData}>Clicked!!!!</button>
    </div>
  )
}

export default Practise1