import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { AuthLanding } from '../AuthLanding/AuthLanding';

function App() {
  return (
    <div className="App">
      <Header />
      <AuthLanding />
    </div>
  );
}

export default App;
