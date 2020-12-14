import './App.css';
import ComponentBlock from './components/ComponentBlock';
import SectionBlock from './components/SectionBlock';
import React, { useState } from 'react';
import HelloWorld from './components/examples/HelloWorld';
import UseStateCounter from './components/examples/useState/UseStateCounter';
import Welcome from './components/examples/Welcome';
import Card from './components/examples/Card';
import UseReducerCounter from './components/examples/useReducer/UseReducerCounter';
import ComponentDidMountFetchApi from './components/examples/ComponentDidMountFetchApi';
import UseStateManageMultiState from './components/examples/useState/UseStateManageMultiState';
import ComponentDidUpdateDemo from './components/examples/ComponentDidUpdateDemo';
import ComponentWillUnmountDemo from './components/examples/ComponentWillUnmountDemo';
import UseReducerManageMultiState from './components/examples/useReducer/UseReducerManageMultiState';
import UseEffectTitleCounter from './components/examples/useEffect/UseEffectTitleCounter';
import UseEffectFetchApi from './components/examples/useEffect/UseEffectFetchApi';
import UseRefAccessDOM from './components/examples/useRef/UseRefAccessDOM';
import UseRefCase from './components/examples/useRef/UseRefCase';
import UseStateCase from './components/examples/useState/UseStateCase';
import Counter from './components/examples/useState/Counter';
import SetStateMultiState from './components/examples/useState/SetStateMultiState';
import UseEffectUserProfile from './components/examples/useEffect/UseEffectUserProfile';
import UseEffectGreet from './components/examples/useEffect/UseEffectGreet';
import UseRefVsUseState from './components/examples/useRef/UseRefVsUseState';
import NestedComponent from './components/examples/useContext/NestedComponent';
import Panel from './components/examples/useContext/themeDemo/Panel';
import Playground from './components/Playground';

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

      <SectionBlock title={'First Component'}
        componentBlocks={[
          <ComponentBlock title={'First component'}
            component={<HelloWorld />} key={1} />
        ]} />

      <SectionBlock title={'Component Lifecycle Methods for Class Components'}
        componentBlocks={[
          <ComponentBlock title={'Fetch API on component mounting'}
            component={<ComponentDidMountFetchApi />} key={1} />,
          <ComponentBlock title={'Understand componentDidUpdate method'}
            component={<ComponentDidUpdateDemo age={age} />} key={2} />,
          <label htmlFor='prevprops' key={3}>Type here to see prevProps in console: </label>,
          <input id='prevprops' onChange={(e) => { setAge(e.target.value) }} key={4} />,
          showUnmount ? <ComponentBlock title={'componentWillUnmount method is invoked before the component is destroyed'}
            component={<ComponentWillUnmountDemo key={6} />} key={5} /> : null,
          <button onClick={() => { setShowUnmount(false) }} key={7}>Remove</button>
        ]} />

      <SectionBlock title={'State VS Props'}
        componentBlocks={[
          <ComponentBlock title={'Counter with useState Hook'}
            component={<UseStateCounter />} key={1} />,
          <ComponentBlock title={'Pass props from parent to child component'}
            component={<Welcome name='Sara' title='Engineer' />} key={2} />,
          <ComponentBlock title={'Nested destructuring'}
            component={<Card props={props} />} key={3} />
        ]} />

      <SectionBlock title={'Hooks'}
        componentBlocks={[
          <ComponentBlock title={'State with function component'}
            component={<UseStateCounter />} key={1} />,
          <ComponentBlock title={'Handle multiple states with useState Hook'}
            component={<UseStateManageMultiState />} key={2} />,
          <ComponentBlock title={'Multiple state with class setState method'}
            component={<SetStateMultiState />} key={3} />,
          <ComponentBlock title={'Each render has its own event handler'}
            component={<Counter />} key={4} />,
          <ComponentBlock title={'Counter with useReducer Hook'}
            component={<UseReducerCounter />} key={5} />,
          <ComponentBlock title={'Manage multiple states with useReducer Hook'}
            component={<UseReducerManageMultiState />} key={6} />,
          <ComponentBlock title={'Title Counter with useEffect'}
            component={<UseEffectTitleCounter />} key={7} />,
          <ComponentBlock title={'Fetch API with useEffect'}
            component={<UseEffectFetchApi />} key={8} />,
          <ComponentBlock title={'Passing a deps array to avoid unnecessary effects'}
            component={<UseEffectGreet name={'Andy'} />} key={9} />,
          <ComponentBlock title={'userId and userName should not be ignored in this example'}
            component={<UseEffectUserProfile userId={userProf.id} userName={userProf.name} />} key={10} />,
          <button onClick={updateUserProfile} key={11}>Update</button>,
/*           <ComponentBlock title={'Difference between useState and useRef, open console'}
            component={<UseStateCase />} key={12} />,
          <ComponentBlock title={''}
            component={<UseRefCase />} key={13} />, */
          <ComponentBlock title={'Difference between useState and useRef'}
            component={<UseRefVsUseState />} key={14} />,
          <ComponentBlock title={'Access DOM element with useRef Hook'}
            component={<UseRefAccessDOM />} key={15} />,
          <ComponentBlock title={'Share data among components to avoid prop drilling'}
            component={<NestedComponent />} key={16} />,
          <ComponentBlock title={'Set a global theme with React Context'}
            component={<Panel />} key={17} />
        ]} />
      <h1>Code playground, examples are not showing in the tutorial</h1>
      <Playground />
    </div>
  );
}

export default App;
