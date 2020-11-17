import './App.css';
import ComponentBlock from './components/ComponentBlock';
import './components/ComponentBlock.scss';
import HelloWorld from './components/examples/HelloWorld';
import UseStateCounter from './components/examples/UseStateCounter';
import Welcome from './components/examples/Welcome';
import Card from './components/examples/Card';
import UseStateForm from './components/examples/UseStateForm';
import UseReducerCounter from './components/examples/UseReducerCounter';
import UseReducerForm from './components/examples/UseReducerForm';
import ComponentDidMountFetchApi from './components/examples/ComponentDidMountFetchApi';
import UseStateManageMultiState from './components/examples/UseStateManageMultiState';

const props = {
  name: 'John',
  address: {
    address1: '50, 5th Ave',
    address2: 'NY 10118',
    city: 'New York'
  }
}

const App = () => {
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
      <ComponentBlock title={'Fetch API in componentDidMount method'}
        component={<ComponentDidMountFetchApi />} />
      <ComponentBlock title={'Manage multiple states with useState Hook'}
        component={<UseStateManageMultiState />} />
    </div>
  );
}

export default App;
