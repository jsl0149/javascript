import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // f1a1d7df1ffa75407db4e674687bb07d69f10ca6

  const login = () => {
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=fc3a64e7e9f04b0db748&redirect_uri=http://localhost:3000';
  };

  return (
    <div className="App">
      <div onClick={login}>login</div>
    </div>
  );
}

export default App;
