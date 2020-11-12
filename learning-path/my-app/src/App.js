import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import Card from './components/Card';
import FormUseState from './components/FormUseState';
import CounterUseReducer from './components/CounterUseReducer';
import FormUseReducer from './components/FormUseReducer';

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
      <HelloWorld />
      <Counter />
      <Welcome name='Sara' title='Engineer' />
      <Card props={props} />
      <p>useState</p>
      <FormUseState />
      <p>useReducer</p>
      <FormUseReducer />
      <CounterUseReducer />

    </div>
  );
}

export default App;
