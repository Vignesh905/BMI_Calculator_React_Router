import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import BMI from "./bmi";
import Result from "./result";

function App() {
  return (
    <div>

      <nav className="navbar">

        <h2>BMI Calculator</h2>

        <div>
          <Link to="/">Home</Link>

          <Link to="/bmi">
            BMI Calculator
          </Link>
        </div>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/bmi"
          element={<BMI />}
        />

        <Route
          path="/result"
          element={<Result />}
        />

      </Routes>

    </div>
  );
}

export default App;