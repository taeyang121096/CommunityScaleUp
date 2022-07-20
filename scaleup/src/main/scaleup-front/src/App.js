import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/main/Main';
import ShopMain from './pages/shop/shopMain';
import CoummunityMain from './pages/community/communityMain';
import CoummunityNavbar from './pages/community/communityNavbar';
import Acc from './pages/shop/Acc';

function App() {
  return (
    <>
    <Router>
      <CoummunityMain/>
      </Router>
    </>
  );
}

export default App;