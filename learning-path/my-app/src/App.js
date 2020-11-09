import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

const team = [
  {
    id: 1,
    name: 'John',
    age: 20
  },
  {
    id: 2,
    name: 'Tom',
    age: 30
  }
]

const App = () => {
  return (
    <div className="App">
      <HelloWorld />
      <Counter />
      <Welcome name='Sara' title='Engineer' />
    </div>
  );
}

export default App;
