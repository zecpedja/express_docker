// client/src/components/HelloWorld.js
import React, { useState, useEffect } from 'react';

const HelloWorld = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch data from the Express server
        fetch('/hello')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setMessage(data.body))
            .catch((error) => console.error('Fetch error:', error));
    }, []);

    return (
        <div>
            {message ? <p>{message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default HelloWorld;
