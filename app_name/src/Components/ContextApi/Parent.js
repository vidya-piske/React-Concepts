// Parent.jsx
import React, { createContext } from 'react';
import Child from './Child';

const mainContext = createContext();

const Parent = () => {
  const vidya = () => {
   return(
    <>
    <h1>Vidya Piske</h1>
    </>
   )
  };

  return (
    <div>
      <mainContext.Provider value={vidya()}>
        <Child />
      </mainContext.Provider>
    </div>
  );
};

export default Parent;
export { mainContext };
