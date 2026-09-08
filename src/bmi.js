import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BMI() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("cm");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    // Check empty values
    if (height === "" || weight === "") {

      setError(
        "Please enter both height and weight."
      );

      return;
    }

    // Check positive values
    if (
      Number(height) <= 0 ||
      Number(weight) <= 0
    ) {

      setError(
        "Height and weight must be greater than 0."
      );

      return;
    }

    // Check numbers
    if (
      isNaN(height) ||
      isNaN(weight)
    ) {

      setError(
        "Please enter valid numbers."
      );

      return;
    }

    setError("");

    // Convert height to meters
    let heightInMeters;

    if (unit === "cm") {

      heightInMeters =
        Number(height) / 100;

    } else {

      heightInMeters =
        Number(height);

    }

    // Navigate to result page
    navigate(
      `/result?height=${heightInMeters}&weight=${Number(weight)}`
    );
  };

  return (

    <div className="container">

      <div className="card">

        <h1>BMI Calculator</h1>

        <form onSubmit={handleSubmit}>

          <label>
            Height
          </label>

          <div className="input-group">

            <input
              type="number"
              step="any"
              placeholder="Enter height"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
            />

            <select
              value={unit}
              onChange={(e) =>
                setUnit(e.target.value)
              }
            >

              <option value="cm">
                cm
              </option>

              <option value="m">
                m
              </option>

            </select>

          </div>

          <label>
            Weight (kg)
          </label>

          <input
            type="number"
            step="any"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
          />

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button type="submit">
            Calculate BMI
          </button>

        </form>

      </div>

    </div>

  );
}

export default BMI;