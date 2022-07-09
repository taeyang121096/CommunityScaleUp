import React from 'react';
import './App.css';
import Navbar from'./Navbar';
import Header from './Header';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
    </> 
  );
}

export default App;