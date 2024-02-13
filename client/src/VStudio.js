// src/VStudio.js
import React, { useState, useEffect } from 'react';

const VStudio = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch data from the /vstudio endpoint
        fetch('/vstudio')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.log('Error fetching VStudio data:', error));
    }, []); // The empty array ensures this effect runs only once after the initial render

    return (
        <div>
            <h2>VStudio Message</h2>
            <p>{message}</p>
        </div>
    );
};

export default VStudio;
