import React, { useState } from "react";

function App() {
  function formatDate(inputDate) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayName = days[inputDate.getDay()];
    const monthName = months[inputDate.getMonth()];
    const day = inputDate.getDate();
    const year = inputDate.getFullYear();

    return `${dayName} ${monthName} ${day} ${year}`;
  }

  function getDateXDaysFromNow(days) {
    const today = new Date();
    today.setDate(today.getDate() + days);
    return today;
  }
  function handleReset() {
    setStep(1);
    setCount(0);
  }

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const increaseStep = () => setStep((s) => s + 1);
  const decreaseStep = () => step > 1 && setStep((s) => s - 1);

  const increaseCount = () => setCount((s) => s + step);
  const decreaseCount = () => setCount((s) => s - step);

  return (
    <div className="App">
      <div className="controls">
        <button onClick={decreaseStep}>-</button>
        <label htmlFor="slider">Slider Value: {step}</label>
        <input
          type="range"
          id="slider"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <button onClick={increaseStep}>+</button>
      </div>
      <div className="controls">
        <button onClick={decreaseCount}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={increaseCount}>+</button>
      </div>
      <div className="output">
        {count === 0 && (
          <span>Today is {formatDate(new Date(Date.now()))}</span>
        )}
        {count > 0 && (
          <span>
            {count} days from today is {formatDate(getDateXDaysFromNow(count))}
          </span>
        )}
        {count < 0 && (
          <span>
            {-count} days ago from today was{" "}
            {formatDate(getDateXDaysFromNow(count))}
          </span>
        )}
      </div>
      {count !== 0 || step !== 1 ? (
        <div className="reset">
          <button className="resetBtn" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
