import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Munros from "./munro";
import ClimbedMunros from "./climbs";
import Munro from "./munrodetail";
import NewClimb from "./newClimb";
import NewReview from "./NewReview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/munros" element={<Munros />} />
          <Route path="/munros/:munro_id" element={<Munro />} />
          <Route path="/munros/:munro_id/climbs" element={<NewClimb />} />
          <Route path="/climbs" element={<ClimbedMunros />} />
          <Route path="/munros/:munro_id/reviews/" element={<NewReview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
