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
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/munros"
            element={
              <>
                <Navbar />
                <Munros />
              </>
            }
          />
          <Route
            path="/munros/:munro_id"
            element={
              <>
                <Navbar />
                <Munro />
              </>
            }
          />
          <Route
            path="/munros/:munro_id/climbs"
            element={
              <>
                <Navbar />
                <NewClimb />
              </>
            }
          />
          <Route
            path="/climbs"
            element={
              <>
                <Navbar />
                <ClimbedMunros />
              </>
            }
          />
          <Route
            path="/munros/:munro_id/reviews/"
            element={
              <>
                <Navbar />
                <NewReview />
              </>
            }
          />
          <Route
            path="/account/climbs"
            element={
              <>
                <Navbar />
                <ClimbsByAccount />
              </>
            }
          />
          <Route
            path="/reviews"
            element={
              <>
                <Navbar />
                <ReviewsByAccount />
              </>
            }
          />
          <Route
            path="/map"
            element={
              <>
                <Navbar />
                <Map />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
