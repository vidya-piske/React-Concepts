import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [clicked1, setClicked1] = useState({ text: '', color: 'black' });
  const [clicked2, setClicked2] = useState('');

  useEffect(() => {
    alert('Clicked 1');
    setClicked1({color: 'red'});
  }, [clicked1]);

  useEffect(() => {
    alert('Clicked 2');
  }, [clicked2]);

  return (
    <div>
      <h1 style={{ color: clicked1.color }}>First Component! {clicked1.text}</h1>
      <button onClick={() => setClicked1({ text: 'Clicked1!', color: 'red' })}>Clicked1!</button>
      <h1>Second Component!</h1>
      <button onClick={() => setClicked2('Clicked2!')}>Clicked2!</button>
    </div>
  );
};

export default UseEffect;
