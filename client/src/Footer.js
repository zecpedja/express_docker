import React from 'react';

const footerStyle = {
    padding: '10px 20px',
    background: 'linear-gradient(to right, purple, blue)',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center'
};

const Footer = () => {
    return (
        <div style={footerStyle}>
            <p>© 2024 My Application</p>
        </div>
    );
};

export default Footer;
