import React, { useState } from 'react'
import Toggle2 from './Toggle2'

const Toggle1 = () => {
  const[alert, setAlert] = useState(false)
  const AddToggle = () => {
    if(alert){
        return setAlert(false)     
    }
    setAlert(true)
  }
  return (
    <div>
        <button onClick={AddToggle}>Toggle</button>
        {alert && <Toggle2/>}
    </div>
  )
}

export default Toggle1