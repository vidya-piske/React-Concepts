import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Remove = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const ClearAll = () => {
        setData([]);
    }

    const Remove = (id) => {
        const removeData = data.filter((personDetails) => {
            console.log(personDetails.id, "personDetails.id");
            return personDetails.id !== id;
        });
        setData(removeData);
    }
    

    return (
        <div>
            {
                data && data.map((getData) => {
                    const { id, name, username, email, phone } = getData;
                    return (
                        <>
                        <div key={id}>
                            <h1>{id}</h1>
                            <h1>{name}</h1>
                            <h1>{username}</h1>
                            <h1>{email}</h1>
                            <h1>{phone}</h1>
                            <button onClick={()=>Remove(id)}>Remove</button>
                        </div>
                        </>  
                    );
                })
            }
             <button onClick={ClearAll}>Clear All</button>
        </div>
    );
}

export default Remove;
