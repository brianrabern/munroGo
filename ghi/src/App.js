import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Munros from "./components/Munro";
import ClimbedMunros from "./components/Climbs";
import Munro from "./components/MunroDetail";
import NewClimb from "./components/NewClimb";
import NewReview from "./components/NewReview";
import ClimbsByAccount from "./components/ClimbsByAccount";
import ReviewsByAccount from "./components/Reviews";
import Map from "./map";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/munros" element={<Munros />} />
          <Route path="/munros/:munro_id" element={<Munro />} />
          <Route path="/munros/:munro_id/climbs" element={<NewClimb />} />
          <Route path="/climbs" element={<ClimbedMunros />} />
          <Route path="/munros/:munro_id/reviews/" element={<NewReview />} />
          <Route path="/account/climbs" element={<ClimbsByAccount />} />
          <Route path="/account/reviews" element={<ReviewsByAccount />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
