import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import History from "./components/History";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
