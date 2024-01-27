import React, { useState } from 'react'

const Checkbox = () => {
  const data = ["Vidya", "Piske"];
  const[checkboxClicked, setCheckboxClicked] = useState(false);
  const[selectClicked, setSelectClicked] = useState('')
  const handleCheckbox = (e) => {
    setCheckboxClicked(e.target.checked);
  }
  const handleChanged = (e) => {
    setSelectClicked(e.target.value)
  }
  return (
    <div>
        <input type='checkbox' checked={checkboxClicked} onChange={handleCheckbox} />
        <select onChange={handleChanged} value={selectClicked}>
        <option value="" disabled hidden>
          Select an option
        </option>
            {
                data && data.map((options)=>{
                    return(
                        <>
                         <option>{options}</option>
                        </>
                    )
                })
            } 
        </select>
    </div>
  )
}

export default Checkbox