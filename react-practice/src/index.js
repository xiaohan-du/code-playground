import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducer from './Reducer'
import * as serviceWorker from './serviceWorker';
import TestUseState from './components/TestUseState';
import TestUseReducer from './components/TestUseReducer';
import Reducer1 from './components/Reducer1';
import Reducer2 from './components/Reducer2';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Reducer /> */}
    {/* <TestUseState /> */}
    {/* <TestUseReducer /> */}
    {/* <Reducer1 /> */}
    <Reducer2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
