import './App.css';
import ComponentBlock from './components/ComponentBlock';
import './components/ComponentBlock.scss';
import React, { useState } from 'react';
import HelloWorld from './components/examples/HelloWorld';
import UseStateCounter from './components/examples/UseStateCounter';
import Welcome from './components/examples/Welcome';
import Card from './components/examples/Card';
import UseStateForm from './components/examples/UseStateForm';
import UseReducerCounter from './components/examples/UseReducerCounter';
import UseReducerForm from './components/examples/UseReducerForm';
import ComponentDidMountFetchApi from './components/examples/ComponentDidMountFetchApi';
import UseStateManageMultiState from './components/examples/UseStateManageMultiState';
import ComponentDidUpdateDemo from './components/examples/ComponentDidUpdateDemo';
import ComponentWillUnmountDemo from './components/examples/ComponentWillUnmountDemo';
import UseReducerManageMultiState from './components/examples/UseReducerManageMultiState';
import UseContextDemo from './components/examples/UseContextDemo';
import UseReducerColorSetter from './components/examples/UseReducerColorSetter';
import UseEffectTitleCounter from './components/examples/UseEffectTitleCounter';
import ClassTitleCounter from './components/examples/ClassTitleCounter';
import UseEffectFetchApi from './components/examples/UseEffectFetchApi';
import UseEffectComponentDidUpdate from './components/examples/UseEffectComponentDidUpdate';
import UseRefAccessDOM from './components/examples/UseRefAccessDOM';
import UseRefVsUseState from './components/examples/UseRefVsUseState';
import UseStateVsUseRef from './components/examples/useState/UseStateVsUseRef';
import Counter from './components/examples/useEffect/Counter';
import UseEffectCounter from './components/examples/useEffect/UseEffectCounter';
import ComponentDidUpdateCounter from './components/examples/useEffect/ComponentDidUpdateCounter';
import SetStateMultiState from './components/examples/useState/SetStateMultiState';
import UseEffectCounterDependency from './components/examples/useEffect/UseEffectCounterDependency';
import UseEffectCounter1 from './components/examples/useEffect/UseEffectCounter1';
import UseEffectUserProfile from './components/examples/useEffect/UseEffectUserProfile';
import UseEffectUnchangedValue from './components/examples/useEffect/UseEffectUnchangedValue';
import UseEffectGreet from './components/examples/useEffect/UseEffectGreet';

const props = {
  name: 'John',
  address: {
    address1: '50, 5th Ave',
    address2: 'NY 10118',
    city: 'New York'
  }
}

const userInfo = [
  {
    id: 1,
    name: 'Tom'
  },
  {
    id: 2,
    name: 'John'
  }
];
const App = () => {
  const [age, setAge] = useState(30);
  const [showUnmount, setShowUnmount] = useState(true);
  const [userProf, setUserProf] = useState(userInfo[0]);
  const updateUserProfile = () => {
    setUserProf(userInfo[1])
  }
  return (
    <div className="App">
      <ComponentBlock title={'First component'}
        component={<HelloWorld />} />

      <ComponentBlock title={'Counter with useState Hook'}
        component={<UseStateCounter />} />

      <ComponentBlock title={'Pass props from parent to child component'}
        component={<Welcome name='Sara' title='Engineer' />} />

      <ComponentBlock title={'Nested destructuring'}
        component={<Card props={props} />} />

      <ComponentBlock title={'Manage state with useState Hook'}
        component={<UseStateForm />} />

      <ComponentBlock title={'Manage state with useReducer Hook'}
        component={<UseReducerForm />} />

      <ComponentBlock title={'Counter with useReducer Hook'}
        component={<UseReducerCounter />} />

      <ComponentBlock title={'Fetch API with componentDidMount method'}
        component={<ComponentDidMountFetchApi />} />

      <ComponentBlock title={'Manage multiple states with useState Hook'}
        component={<UseStateManageMultiState />} />

      <ComponentBlock title={'Update state and props with componentDidUpdate method'}
        component={<ComponentDidUpdateDemo age={age} />} />

      <label htmlFor='prevprops'>Type here to see prevProps in console: </label>
      <input id='prevprops' onChange={(e) => { setAge(e.target.value) }} />

      {showUnmount ? <ComponentBlock title={'Stop the timer before unmounting the component'}
        component={<ComponentWillUnmountDemo />} /> : null}
      <button onClick={() => { setShowUnmount(false) }}>Remove</button>

      <ComponentBlock title={'Manage multiple states with useReducer Hook'}
        component={<UseReducerManageMultiState />} />

      <ComponentBlock title={'useContext Hook Demo'}
        component={<UseContextDemo />} />

      <ComponentBlock title={'useReducer Demo'}
        component={<UseReducerColorSetter />} />

      <ComponentBlock title={'Title Counter with useEffect'}
        component={<UseEffectTitleCounter />} />

      {/* <ComponentBlock title={'Title Counter with Class LifeCycle Methods'}
        component={<ClassTitleCounter />} /> */}

      <ComponentBlock title={'Fetch API with useEffect Hook'}
        component={<UseEffectFetchApi />} />

      <ComponentBlock title={'Make useEffect equals to componentDidUpdate'}
        component={<UseEffectComponentDidUpdate />} />

      <ComponentBlock title={'Access DOM element with useRef'}
        component={<UseRefAccessDOM />} />

      <ComponentBlock title={'useRef vs useState'}
        component={<UseRefVsUseState />} />

      <ComponentBlock title={'useState vs useRef'}
        component={<UseStateVsUseRef />} />

      <ComponentBlock title={'Each render has its own effect'}
        component={<Counter />} />

      <ComponentBlock title={'useEffect counter'}
        component={<UseEffectCounter />} />
        
      <ComponentBlock title={'componentDidUpdate counter'}
        component={<ComponentDidUpdateCounter />} />

      <ComponentBlock title={'Multiple state with class setState method'}
        component={<SetStateMultiState />} />

      <ComponentBlock title={'useEffect counter with dependency'}
        component={<UseEffectCounterDependency />} />

      {/* <UseEffectCounter1 /> */}

      <ComponentBlock title={'userId and userName should not be ignored in this example'}
        component={<UseEffectUserProfile userId={userProf.id} userName={userProf.name} />} />
      
      <button onClick={updateUserProfile}>Update</button>

      <ComponentBlock title={'Passing correct dependency array to useEffect to avoid unnecessary effects'}
        component={<UseEffectGreet name={'Andy'} />} />
      
    </div>
  );
}

export default App;
