import React, { useState } from 'react';

const Practise = () => {
  const [data, setData] = useState(0);

  const Clicked = () => {
    setTimeout(() => {
      setData((prevData) => prevData + 1);
    }, 3000);
  };

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={Clicked}>Click</button>
    </div>
  );
}

export default Practise;
