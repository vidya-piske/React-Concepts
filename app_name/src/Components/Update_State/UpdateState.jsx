import React, {useState} from 'react'

const UpdateState = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[name, setName] = useState("Vidya");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[age, setAge] = useState(25);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[hobby, setHobby] = useState("Music");
   
  const Clicked = () => {
    setName("Piske Vidya!!!!");
    setAge(30);
    setHobby("Playing!!!!");
  }
  return (
    <div>
     <h1>{name}</h1>
     <h1>{age}</h1>
     <h1>{hobby}</h1>
     <button onClick={Clicked}>Clicked!!!!!</button>
    </div>
  )
}

export default UpdateState