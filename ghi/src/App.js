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
import ClimbsByAccount from "./ClimbsByAccount";
import ReviewsByAccount from "./reviews";
import Map from "./map";
import Dashboard from "./Dashboard";

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
