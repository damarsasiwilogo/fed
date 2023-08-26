import Logo from './logo.svg';
import './App.css';
import { Route, Routes, } from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import Counter from "./pages/Counter";





// // function MyProfile({nama, umur, children}){
// //   return (
// //   <div className="color-red">
// //     <h1>Nama: {nama}</h1>
// //     <h2>Umur: {umur} tahun</h2>

// //     {children}
// //   </div>
// //   );
// // }


//BARUUUU START
function App() {
  const [text, setText] = useState("Halo");

  return (
    <div className="App">
      <button onClick = {() => {
        setText("Updated");
        }}>
        Updated text
      </button>

      <Routes>
        <Route path="/" element={<Home text={text} />} />
        <Route path="/about" element={<About text={text} />} />
        <Route path="/list" element={<List  />} />
        <Route path="/counter" element={<Counter  />} />
      </Routes>

    </div>
  );
}
export default App;
//BARUUUU END



    // <div className="App">
    //   <header className="App-header">
    //     <MyProfile nama="Damar" umur="20">
    //       <p>Damar is a boy.</p>
    //       <span>horee</span>
    //     </MyProfile>
    //     <MyProfile nama="Jaka" umur="30"/> 
    //   </header>
    // </div>

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>

// export default App;