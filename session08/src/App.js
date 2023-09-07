import './App.css';
import { useState, createContext, useContext } from 'react';
import { Counter } from './features/counter/Counter'

const GlobalData = createContext("");

function A() {
  const { data } = useContext(GlobalData);
  return (
  <div onClick={() => {
    localStorage.setItem("varku", "world hello");
  }}>
  Component A {data}</div>
  );
}

function B() {
  const { data, setData } = useContext(GlobalData);
  return (
    <>
      <div onClick={() => {
        setData("data changed");
        localStorage.setItem("varku", "hello world");
      }}> Component B {data}
      </div>
      <button onClick={() => {
        localStorage.removeItem("varku");
      }}>Hapus varku</button>
    </>
  );
}

function App() {
  const [data, setData] = useState("Data");
  return (
    <GlobalData.Provider value={{data, setData}}>
      <Counter />
    </GlobalData.Provider>
  );
}

export default App;
