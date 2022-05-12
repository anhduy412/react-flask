import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    fetch('/api/time').then(res => res.json().then(data => {
      setCurrentTime(data.time);
    }))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p><code>Have a good day mate</code></p>
        <p><code>Current time: {currentTime}</code></p>
      </header>
    </div>
  );
}

export default App;