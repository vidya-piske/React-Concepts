import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Getapi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(response?.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>GET API INTEGRATION!!!!</h1>
            <>
                <table
                    style={{
                        borderCollapse: 'collapse',
                        width: '100%',
                        backgroundColor: '#f2f2f2',
                        border: '1px solid #ddd',
                        margin: '0 auto'
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Id</th>
                            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Name</th>
                            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Username</th>
                            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((getdata) => {
                            const { id, name, username, email } = getdata;
                            return (
                                <tr key={id} style={{ backgroundColor: 'white' }}>
                                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>{id}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>{name}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>{username}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>{email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        </div>
    );
};

export default Getapi;
