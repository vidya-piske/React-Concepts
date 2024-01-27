import React from 'react'
import CustomApiData from './CustomApiData'

const ApiData1 = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const{userData, isLoading, isError} = CustomApiData(url)
  if(isLoading){
    return <h1>Loading....</h1>
  }
  if(isError){
    return <h1>Error....</h1>
  }
  return (
    <div>
      {
        userData.map((item)=>{
            const{id, name, username, phone, website, company} = item;
            return(
                <>
                 <h1 key={id}>{name}</h1>
                 <h1>{username}</h1>
                 <h1>{phone}</h1>
                 <h1>{website}</h1>
                 <h1>{company.name}</h1>
                </>
            )
        })
      }
    </div>
  )
}

export default ApiData1