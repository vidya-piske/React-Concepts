import React, { useState } from 'react'

const Updateusingobject = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState({ name: 'vidya', age: 24, hobby: "music" });
  const clicked = () => {
    setData({...data, name: 'piske_vidya'});
  };
  
  return (
    <div>
       <h1>{data.name}</h1> 
       <h1>{data.age}</h1> 
       <h1>{data.hobby}</h1> 
       <button onClick={clicked}>Update State</button>
    </div>
  )
}

export default Updateusingobject