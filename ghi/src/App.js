import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./main";
import "./App.css";
import Login from "./Login";
import Signup from './Signup';
import Munros from './munro'
import ClimbedMunros from './climbs';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/munros" element={<Munros />} />
          <Route path="/climbs" element={<ClimbedMunros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
