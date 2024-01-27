import React, { useEffect } from 'react';
import axios from 'axios';

const Editapi = ({ data, handleChange, handleSubmit, handleUpdate }) => {
    console.log(data.password, "data.password")
    useEffect(() => {
        if (data.id) {
            axios
                .patch(`https://your-mock-api.com/users/${data.id}`)
                .then((response) => {
                    const userData = response.data;
                    // Update state using handleChange
                    handleChange({ target: { name: 'fname', value: userData.fname } });
                    handleChange({ target: { name: 'lname', value: userData.lname } });
                    handleChange({ target: { name: 'email', value: userData.email } });
                    handleChange({ target: { name: 'phone', value: userData.phone } });
                    handleChange({ target: { name: 'password', value: userData.password } });
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        } else {
            // If there is no id, it's a new record, initialize the form data
            handleChange({ target: { name: 'fname', value: '' } });
            handleChange({ target: { name: 'lname', value: '' } });
            handleChange({ target: { name: 'email', value: '' } });
            handleChange({ target: { name: 'phone', value: '' } });
            handleChange({ target: { name: 'password', value: '' } });
        }
    }, [data.id]);

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="fname" value={data.fname} onChange={handleChange} />
                <br />
                <label>Last Name</label>
                <input type="text" name="lname" value={data.lname} onChange={handleChange} />
                <br />
                <label>Email</label>
                <input type="email" name="email" value={data.email} onChange={handleChange} />
                <br />
                <label>Phone Number</label>
                <input type="text" name="phone" value={data.phone} onChange={handleChange} />
                <br />
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={handleChange} />
                <br />
                <button type="button" onClick={handleUpdate}>
                    Update
                </button>
            </form>
        </div>
    );
};

export default Editapi;
