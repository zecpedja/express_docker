// client/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
        .then(response => response.json())
        .then(data => setMessage(data.message))
        .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          {message ? <p>{message}</p> : <p>Loading message...</p>}
        </header>
      </div>
  );
}

export default App;
