import React, { useState } from 'react'

const Index = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState([
        {
            id: 1, name: 'Vidya',email: 'vidyap@nu10.co'
        },
        {
            id: 2, name: 'Vinayak',email: 'vidyap@nu10.co'
        },
        {
            id: 3, name: 'Nagesh',email: 'vidyap@nu10.co'
        },
        {
            id: 4, name: 'Laxmi',email: 'vidyap@nu10.co'
        },
        {
            id: 5, name: 'Piske',email: 'vidyap@nu10.co'
        },
    ])
    const handleSubmit = (e) => {
        e.preventDefault()
       const addData = {name, email}
       const addeduserdata = [...data,addData]
       setData(addeduserdata)
       setName('');
       setEmail('');
    }
    const RemoveData = (id) => {
      const removeData = data.filter((item)=>item.id !== id);
      setData(removeData);
    }
    const ClearAll = () => {
      setData('');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/><br />
                <label htmlFor='email'>Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/><br />
                <button>Add</button>
            </form>
            {
                data && data.map((items)=>{
                    const{id, name, email} = items
                  return(
                    <>
                     <h1 key={id}>{name}</h1>
                     <h1>{email}</h1>
                     <button onClick={()=>RemoveData(id)}>Remove</button>
                    </>
                  )
                })
            }
            <button onClick={ClearAll}>Clear All</button>
        </>
    )
}


export default Index