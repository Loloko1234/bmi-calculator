import React, { useState } from "react";

import "./index.css";
document.title = "BMI";
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  let calcBmi = (event) => {
    event.preventDefault(); //Sprawia ze nie wysyła podstawowych wartosci czyli zero albo ""
    if (weight === 0 || height === 0) {
      setBmi("Enter the correct data");
      const bmiElements = document.getElementsByClassName("bmi");
      for (let i = 0; i < bmiElements.length; i++) {
        bmiElements[i].style.color = "red";
      }
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(1)); //Przesuwa Bmi do pierwszej liczby po przecinku np. 23.4

      const bmiElements = document.getElementsByClassName("bmi");
      for (let i = 0; i < bmiElements.length; i++) {
        if (bmi < 16) {
          bmiElements[i].style.color = "red";
          setMessage("Starvation");
        } else if (bmi >= 16 && bmi <= 16.99) {
          bmiElements[i].style.color = "maroon";
          setMessage("Emaciation");
        } else if (bmi >= 17 && bmi <= 18.49) {
          bmiElements[i].style.color = "lightcoral";
          setMessage("Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.99) {
          bmiElements[i].style.color = "green";
          setMessage("Normal Weight");
        } else {
          bmiElements[i].style.color = "darkred";
          setMessage("Overweight");
        }
      }
    }
  };
  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3 className="bmi">Your Bmi is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
