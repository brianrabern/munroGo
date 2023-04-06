import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./main";
import "./App.css";
import Login from "./Login";
import Signup from './Signup';
import Munros from './munro'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Munros" element={<Munros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
