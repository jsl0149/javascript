import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // f1a1d7df1ffa75407db4e674687bb07d69f10ca6

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
