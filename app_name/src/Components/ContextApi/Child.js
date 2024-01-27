// Child.jsx
import React, { useContext } from 'react';
import { mainContext } from './Parent'; // Import mainContext from the correct file

const Child = () => {
  const response = useContext(mainContext);
  console.log(response, "response")
  return (
    <div>
      <h1>Child Component!!!! {response}</h1>
    </div>
  );
};

export default Child;
