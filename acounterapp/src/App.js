import './App.css';
import Counter from './component/counter';

function App() {
  return (
    <div className="App">
      <Counter initialValue={0}/>
    </div>
  );
}

export default App;
