import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CustomApiData = (defaultValue) => {
  const[userData, setUserData] = useState(defaultValue)
  const[isLoading, setIsLoading] = useState(true)
  const[isError, setIsError] = useState(false)
  useEffect(()=>{
    const fetchData = async() => {
        try{
         const responseData = await axios.get(defaultValue)
         setUserData(responseData?.data)
         setIsLoading(true)
        }
        catch(error){
         setIsError(true)
        }
        setIsLoading(false)
     }
     fetchData()
  },[])
  
  return {isLoading, isError, userData}
}

export default CustomApiData