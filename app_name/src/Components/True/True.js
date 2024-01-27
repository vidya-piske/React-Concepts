import React,{useEffect, useState} from 'react'

const True = () => {
  const[user, setUser] = useState('ksdkdsf');
  useEffect(()=>{
    const NewFunction = () => {
        setUser("Vidya Piske")
    }
    NewFunction()
  },[])
  return (
    <div>
        {user || 'sdsdf'}
      {
        user && 
        <div>
            <h1>Data.....</h1>
            {user}
        </div>
      }
    </div>
  )
}

export default True