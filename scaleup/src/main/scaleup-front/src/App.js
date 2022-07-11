import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/main/Main';

function App() {
  return (
    <>
    <Router>
      <MainPage/>
      </Router>
    </>
  );
}

export default App;