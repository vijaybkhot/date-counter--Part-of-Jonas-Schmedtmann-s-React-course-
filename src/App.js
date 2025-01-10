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
        <span>Step: {step}</span>
        <button onClick={increaseStep}>+</button>
      </div>
      <div className="controls">
        <button onClick={decreaseCount}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}

export default App;
