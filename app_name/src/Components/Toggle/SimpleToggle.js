import React, { useState } from 'react'
import Toggle2 from './Toggle2'

const SimpleToggle = () => {
  const [alert, setAlert] = useState(false)
  return (
    <div>
        <button onClick={()=>setAlert(!alert)}>Toggle</button>
        {alert && <Toggle2 />}
    </div>
  )
}

export default SimpleToggle