import Child1 from './components/Child1';
import Child2 from './components/Child2';
import './App.css';
import { createContext, useState } from 'react';

export const appContext = createContext(null);


function App() {
  const [value, setValue] = useState([]);
  return (
    <div>
      <appContext.Provider value={{value,setValue}}>
        <Child1 />
        <Child2 />
      </appContext.Provider>

    </div>
  );
}

export default App;
