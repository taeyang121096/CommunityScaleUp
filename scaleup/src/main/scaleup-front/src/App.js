import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from'./Navbar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Menubar from './Menubar';
import Imageslide from './Imageslide';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Imageslide />
      <Menubar />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;