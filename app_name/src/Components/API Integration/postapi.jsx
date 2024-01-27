import React, { useState } from 'react';
import axios from 'axios';
import EditApi from './Editapi';

const PostApi = () => {
  const [dataLists, setDataLists] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    };

    axios
      .post('https://jsonplaceholder.typicode.com/posts', { payload })
      .then((response) => {
        setDataLists((prevDataLists) => [...prevDataLists, payload]);
        setFormData({
          id: null,
          fname: '',
          lname: '',
          email: '',
          phone: '',
          password: ''
        });
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  const handleEdit = (item) => {
    setEditForm(true);
    setFormData({
      id: item.id,
      fname: item.fname,
      lname: item.lname,
      email: item.email,
      phone: item.phone,
      password: item.password
    });
  };

  const handleUpdate = () => {
    // Implement your update logic here
    const updatedDataLists = dataLists.map((item) =>
      item.id === formData.id ? { ...item, ...formData } : item
    );

    // Update the state with the updated data
    setDataLists(updatedDataLists);

    // Clear the form fields and reset editForm and formData
    setEditForm(false);
    setFormData({
      id: null,
      fname: '',
      lname: '',
      email: '',
      phone: '',
      password: ''
    });
  };

  const Remove = (id) => {
    const removeData = dataLists?.filter((item) => item.id !== id);
    setDataLists(removeData);
  };

  return (
    <>
      {editForm ? (
        <EditApi
          data={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
        />
      ) : (
        <div>
          <h1>Add Form</h1>
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
            <br />
            <label>Last Name</label>
            <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
            <br />
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <br />
            <label>Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            <br />
            <label>Password</label>
            <input type="text" name="password" value={formData.password} onChange={handleChange} />
            <br />
            <label>Numeric</label>
            <input type='text' inputMode='numeric' pattern="[0-9]*" />
            <label>Number</label>
            <input type='number' />
            <button type="submit">Add</button>
          </form>

          <table style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', textAlign: 'left', padding: '8px' }}>First Name</th>
                <th style={{ border: '1px solid black', textAlign: 'left', padding: '8px' }}>Last Name</th>
                <th style={{ border: '1px solid black, textAlign: left, padding: 8px' }}>Email</th>
                <th style={{ border: '1px solid black, textAlign: left, padding: 8px' }}>Phone Number</th>
                <th style={{ border: '1px solid black, textAlign: left, padding: 8px' }}>Password</th>
                <th style={{ border: '1px solid black', textAlign: 'left', padding: '8px' }}></th>
              </tr>
            </thead>
            <tbody>
              {dataLists.map((item) => (
                <tr key={item.id}>
                  <td style={{ border: '1px solid black', textAlign: 'left', padding: '8px' }}>{item.fname}</td>
                  <td style={{ border: '1px solid black', textAlign: 'left', padding: '8px' }}>{item.lname}</td>
                  <td style={{ border: '1px solid black', textAlign: 'left', padding: '8px' }}>{item.email}</td>
                  <td style={{ border: '1px solid black', textAlign: 'left', padding: '8px' }}>{item.phone}</td>
                  <td style={{ border: '1px solid black', textAlign: 'left', padding: '8px' }}>{item.password}</td>
                  <td style={{ border: '1px solid black', textAlign: 'left', padding: '8px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button type="button" onClick={() => handleEdit(item)}>
                        Edit
                      </button>
                      <button onClick={() => Remove(item.id)}>Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default PostApi;
