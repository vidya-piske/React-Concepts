import React, { useState } from 'react';

const Practise = () => {
  const [data, setData] = useState({
    id: '',
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: ''
  });

  const [userLists, setUserLists] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserLists([...userLists, data]);
    setData({
      id: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      password: '',
      confirmpassword: ''
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const removeData = (id) => {
    const updatedUserLists = userLists.filter((item) => item.id !== id);
    setUserLists(updatedUserLists);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="fname" value={data.fname} onChange={handleChange} /><br />
        <label>Last Name</label>
        <input type="text" name="lname" value={data.lname} onChange={handleChange} /><br />
        <label>Email</label>
        <input type="email" name="email" value={data.email} onChange={handleChange} /><br />
        <label>Phone Number</label>
        <input type="phone" name="phone" value={data.phone} onChange={handleChange} /><br />
        <label>Password</label>
        <input type="password" name="password" value={data.password} onChange={handleChange} /><br />
        <label>Confirm Password</label>
        <input type="password" name="confirmpassword" value={data.confirmpassword} onChange={handleChange} /><br />
        <button type="submit">Add</button>
      </form>
      {userLists.map((items) => (
        <div key={items.id}>
          <h1>{items.fname}</h1>
          <h1>{items.lname}</h1>
          <h1>{items.email}</h1>
          <h1>{items.password}</h1>
          <h1>{items.confirmpassword}</h1>
          <button onClick={() => removeData(items.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Practise;
