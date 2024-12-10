import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipet from "./components/Recipet";
import Towns from "./components/Towns";
import Leadgerbook from "./components/Leadgerbook";
import Signup from "./components/Signup.jsx";
import TownDetails from "./components/TownDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Route for Recipet */}
      <Route path="/towns" element={<Towns />} />
      <Route path="/Leadger-book" element={<Leadgerbook />} />
      <Route path="/recipet" element={<Recipet />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/town/" element={<TownDetails />} />
    </Routes>
  );
};

export default App;
