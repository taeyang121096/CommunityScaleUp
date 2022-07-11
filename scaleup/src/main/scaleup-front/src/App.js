import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/main/Main';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Router>
      <Signup/>
      </Router>
    </>
  );
}

export default App;