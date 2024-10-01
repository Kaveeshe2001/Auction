import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Main/Navbar/Navbar';
import Hero from './components/Home/Hero/Hero';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </Router>
  );
}

export default App;