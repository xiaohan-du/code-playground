import { useCallback, useEffect, useState } from 'react';
import './App.css';
let count = 0;
const App = () => {
  const [val, setVal] = useState('');
  const getData = useCallback(() => {
    setTimeout(() => {
      setVal('new data ' + count);
      count++;
    }, 500);
  }, [count]);
  return (
    <div className="App">
      <Child val={val} getData={getData} />
    </div>
  );
}

const Child = ({val, getData}) => {
  useEffect(() => {
    getData();
  }, [getData]);
  return(
    <div>
      {val}
    </div>
  )
}

export default App;
