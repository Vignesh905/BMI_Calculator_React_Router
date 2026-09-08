import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home">

      <h1>BMI Calculator</h1>

      <p>
        Welcome to the BMI Calculator
      </p>

      <p>
        Enter your height and weight
        to calculate your BMI.
      </p>

      <Link to="/bmi">
        <button>
          Start Calculator
        </button>
      </Link>

    </div>
  );
}

export default Home;