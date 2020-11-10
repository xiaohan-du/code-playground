import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import Card from './components/Card';

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
    </div>
  );
}

export default App;
