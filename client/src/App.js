// client/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Simple Home component
const Home = () => (
    <div>
        <h2>Home Page</h2>
        <p>This is the home page of the app.</p>
    </div>
);

// Simple About component
const About = () => (
    <div>
        <h2>About Page</h2>
        <p>This is the about page of the app.</p>
    </div>
);

// Navbar component
const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
);

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <header className="App-header">
                    {message ? <p>{message}</p> : <p>Loading message...</p>}
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
