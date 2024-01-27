import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[data, setData] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[isError, setIsError] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    const fetchData = async()=>{
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response?.data);
        }
        catch{
            setIsError(true)
            console.log("error occured!!!!")
        }
        setIsLoading(false)
    }
    fetchData();
  },[])
  if(isLoading){
    return <h1>Loading....</h1>
  }
  if(isError){
    return <h1>Error Occured....</h1>
  }
  return (
    <div>
        {
            data.map((data)=>{
                const{id, name, phone, username, website} = data
                return(
                    <>
                    <h1 key={id}>{id}</h1>
                    <h1>{name}</h1>
                    <h1>{phone}</h1>
                    <h1>{username}</h1>
                    <h1>{website}</h1>
                    </>
                )
            })
        }
    </div>
  )
}

export default Index