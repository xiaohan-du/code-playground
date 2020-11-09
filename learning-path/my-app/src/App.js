import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div className="App">
      <HelloWorld />
      <Counter />
      <Welcome name='Sara' />
    </div>
  );
}

export default App;
