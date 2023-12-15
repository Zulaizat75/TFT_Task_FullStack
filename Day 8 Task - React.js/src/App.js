import React from 'react';
import { useTimer } from 'use-timer';
import './App.css';

function App() {

  const { time, start, pause, reset } = useTimer({ interval: 10 }); // Set interval to 1 millisecond

  const formatTime = (time) => {
    // Math.floor return rounded integer value
    const seconds = Math.floor(time / 100);
    //slice method extracts a section of a string, padStart method pads the resulting string with another string
    const milliseconds = (time % 1000).toString().slice(0, 3).padStart(2, '0');
    return `${seconds} Seconds, ${milliseconds} Milliseconds`;
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <p className="time-display">{formatTime(time)}</p>
      <div className="button">
        <button className="start-button" onClick={start}>Start</button>
        <button className="stop-button" onClick={pause}>Stop</button>
        <button className="reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App