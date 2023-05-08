import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Munros from "./components/Munros";
import Climbs from "./components/Climbs";
import MunroDetail from "./components/MunroDetail";
import NewClimb from "./components/modals/NewClimb";
import NewRev from "./components/modals/NewRev";
import Reviews from "./components/Reviews";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
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
      </Routes>
      <NewClimb />
      <NewRev />
    </BrowserRouter>
  );
}

export default App;
