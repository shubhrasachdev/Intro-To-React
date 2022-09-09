import './App.css';
import Counter from './components/Counter/Counter';
import CounterParent from './components/Counter/CounterParent';
import Pets from './components/Pets/Pets';

function App() {
  return (
    <div className='App'>
      {/* <Pets /> */}
      <CounterParent />
      {/* <Counter key="myCounter"/> */}
    </div>
  );

}

export default App;
