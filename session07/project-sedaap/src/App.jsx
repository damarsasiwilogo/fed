import { Route, Routes } from "react-router-dom";
import { VStack } from '@chakra-ui/react';
import Home from './pages/Home';
import Counter from "./pages/Counter";
import Stopwatch from "./pages/Stopwatch";
import Filterapp from "./pages/Filterapp";

function App() {  
  return (
    <>
      <VStack>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/counter" element={<Counter  />} />
            <Route path="/stopwatch" element={<Stopwatch  />} />
            <Route path="/filterapp" element={<Filterapp  />} />
          </Routes>
        </div>
      </VStack>
    </>
  );
}

export default App;
