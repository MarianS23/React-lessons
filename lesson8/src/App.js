import { useState } from 'react';
import './App.css';
import UseMemoComponent from './components/UseMemoComponent';

function App() {

  const [data, setData] = useState(true);
  return (
    <div className="App">
      <UseMemoComponent data={data} />
    </div>
  );
}

export default App;
