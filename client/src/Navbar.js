import React from 'react';

const navbarStyle = {
    padding: '10px 20px',
    background: 'linear-gradient(to right, purple, blue)',
    color: 'white'
};

const Navbar = () => {
    return (
        <div style={navbarStyle}>
            <h1>My Application</h1>
        </div>
    );
};

export default Navbar;
