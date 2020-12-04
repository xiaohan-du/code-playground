import React, { useEffect, useState } from 'react';

const UseEffectCounterDependency = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return <div>{count}</div>;
}

export default UseEffectCounterDependency;