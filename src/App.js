import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projectdetails from "./Pages/Projectdetails";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/:id" element={<Projectdetails />} />
    </Routes>
  );
};

export default App;
