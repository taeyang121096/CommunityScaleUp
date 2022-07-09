import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from'./components/Navbar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Menubar from './pages/main/Menubar';
import Imageslide from './pages/main/Imageslide';

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