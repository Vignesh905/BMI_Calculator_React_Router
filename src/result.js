import React from "react";
import {
  Link,
  useSearchParams
} from "react-router-dom";

function Result() {

  const [searchParams] =
    useSearchParams();

  const height =
    Number(searchParams.get("height"));

  const weight =
    Number(searchParams.get("weight"));

  // If no data exists
  if (!height || !weight) {

    return (

      <div className="container">

        <div className="card">

          <h2>
            No BMI data found
          </h2>

          <Link to="/bmi">

            <button>
              Go to Calculator
            </button>

          </Link>

        </div>

      </div>

    );
  }

  // BMI Formula
  const bmi =
    weight / (height * height);

  return (

    <div className="container">

      <div className="card result">

        <h1>
          BMI Result
        </h1>

        <h2>
          Your BMI: {bmi.toFixed(2)}
        </h2>

        <p>
          Height: {height.toFixed(2)} m
        </p>

        <p>
          Weight: {weight} kg
        </p>

        <Link to="/bmi">

          <button>
            Calculate Again
          </button>

        </Link>

      </div>

    </div>

  );
}

export default Result;