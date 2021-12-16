import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const login = () => {
    window.location.href = 'http://localhost:3000/oth';
  };

  return (
    <div className="App">
      <div onClick={login}>login</div>
    </div>
  );
}

export default App;
