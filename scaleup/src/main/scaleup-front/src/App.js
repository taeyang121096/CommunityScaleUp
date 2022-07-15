import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/main/Main';
import Signup from './components/Signup';
import ShopMain from './pages/shop/shopMain';

function App() {
  return (
    <>
    <Router>
      <ShopMain/>
      </Router>
    </>
  );
}

export default App;