import React, { useState } from 'react';

const SingleState = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [userList, setUserList] = useState([]); // State to store the list of users

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, user]); // Add the current user to the user list
    setUser({
      name: '',
      email: '',
      password: ''
    }); // Clear the input fields
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" onChange={handleChange} value={user.name} /><br />
        <label htmlFor='email'>Email</label>
        <input type="email" name="email" onChange={handleChange} value={user.email} /><br />
        <label htmlFor='password'>Password</label>
        <input type="password" name="password" onChange={handleChange} value={user.password} /><br />
        <button type="submit">Add</button>
      </form>

      {/* Display the list of users */}
      {userList.map((item, index) => (
        <div key={index}>
          <h1>Name: {item.name}</h1>
          <h1>Email: {item.email}</h1>
          <h1>Password: {item.password}</h1>
        </div>
      ))}
    </>
  );
};

export default SingleState;
