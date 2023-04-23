import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from "./main";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Munros from "./components/Munros";
import Climbs from "./components/Climbs";
import MunroDetail from "./components/MunroDetail";
import NewClimb from "./components/NewClimb";
import NewReview from "./components/NewReview";
import Reviews from "./components/Reviews";
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
                <MunroDetail />
              </>
            }
          />
          <Route
            path="/munros/:munro_id/add-climb"
            element={
              <>
                <Navbar />
                <NewClimb />
              </>
            }
          />
          <Route
            path="/munros/:munro_id/add-review/"
            element={
              <>
                <Navbar />
                <NewReview />
              </>
            }
          />
          <Route
            path="/my-climbs"
            element={
              <>
                <Navbar />
                <Climbs />
              </>
            }
          />
          <Route
            path="/my-reviews"
            element={
              <>
                <Navbar />
                <Reviews />
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
