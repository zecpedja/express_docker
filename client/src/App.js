import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HelloWorld from './components/HelloWorld';

const appStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
};

const contentStyle = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to right, purple, blue)',
  color: 'white'
};

const App = () => {
  // You would use React hooks or components to fetch data from your Express API here
  return (
      <div style={appStyle}>
        <Navbar />
        <div style={contentStyle}>
          <h2>Welcome to My Application</h2>
            <HelloWorld />
        </div>
        <Footer />
      </div>
  );
};

export default App;
