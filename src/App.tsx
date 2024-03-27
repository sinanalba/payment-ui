import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Payments from './components/Payments';

function App() {
  return (
    <div className="App">
      <Header/>
      <Payments/>
    </div>
  );
}

export default App;
