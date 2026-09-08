# Ex06 BMI Calculator
## Name: PALADI VENKATESH VIGNESH
## Reg No: 212224040229
## Date: 08/09/2026

## AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

## DESIGN STEPS

### STEP 1: Initialize React Project

<li>Create a new React app using create-react-app.</li>
<li>Install React Router using:</li>
npm install react-router-dom

### STEP 2: Set Up Routing

Create routing structure with react-router-dom:

<li>Home route (/) – Intro or Navigation</li>

<li>BMI Calculator route (/bmi)</li>

<li>Result route (/result)</li>

### STEP 3: Design the BMI Form Page

<li>Create a form to accept Height (in cm or m) and Weight (in kg).</li>

<li>On form submit, navigate to the result page with entered values via URL query params or context/state.</li>

## STEP 4: Handle Input Validation

<li>Check if height and weight are valid numbers.</li>

<li>Optionally, show error messages for invalid inputs.</li>

### STEP 5: Perform BMI Calculation

<li>In the result component:

<li>Extract height and weight from the route (URL or passed state).</li>

<li>Apply the BMI formula:</li>

![image](https://github.com/user-attachments/assets/ec785506-c96b-489e-8783-fb1a5d36101a)
​
 
<li>Convert height from cm to m if needed.</li></li>

### STEP 6: Display Result

<li>Show calculated BMI.</li>

<li>Show category based on BMI range:

<li>Underweight, Normal, Overweight, Obese, etc.</li></li>

### STEP 7: Navigation Options

<li>Provide a button to go back to the BMI form to calculate again.</li>

### STEP 8: Enhancements

<li>Add styling using CSS or Tailwind.</li>

## PROGRAM
App.js
```
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
```
App.css
```
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f2f4f7;
}

/* Navigation */

.navbar {
  background: #222;
  color: white;

  padding: 15px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar h2 {
  margin: 0;
}

.navbar a {
  color: white;
  text-decoration: none;

  margin-left: 20px;
}

/* Main container */

.container {
  min-height: 85vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* Card */

.card {
  background: white;

  width: 400px;

  padding: 30px;

  border-radius: 12px;

  box-shadow:
    0 5px 20px
    rgba(0, 0, 0, 0.15);
}

.card h1 {
  text-align: center;
}

/* Form */

label {
  display: block;

  margin-top: 15px;
  margin-bottom: 8px;

  font-weight: bold;
}

input,
select {

  width: 100%;

  padding: 12px;

  border: 1px solid #ccc;

  border-radius: 6px;

  font-size: 16px;
}

.input-group {

  display: flex;

  gap: 10px;
}

.input-group input {
  flex: 2;
}

.input-group select {
  flex: 1;
}

/* Button */

button {

  width: 100%;

  padding: 12px;

  margin-top: 20px;

  border: none;

  border-radius: 6px;

  background: #333;

  color: white;

  font-size: 16px;

  cursor: pointer;
}

button:hover {
  background: #555;
}

/* Error */

.error {
  color: red;
}

/* Home */

.home {

  flex-direction: column;

  text-align: center;
}

.home h1 {
  font-size: 40px;
}

.home p {
  font-size: 18px;
}

/* Result */

.result {
  text-align: center;
}
```


## OUTPUT

<img width="1108" height="658" alt="Screenshot 2026-09-08 190328" src="https://github.com/user-attachments/assets/fc8e1849-991e-4c7f-a8a7-b1288c7bdbdb" />




## RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.
