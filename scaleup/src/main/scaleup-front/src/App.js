import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/main/Main';
import Food from './pages/shop/Food';
import Toy from './pages/shop/Toy';
import Acc from './pages/shop/Acc';
import Clothes from './pages/shop/Clothes';
import ShopMain from './pages/shop/shopMain';
import CoummunityMain from './pages/community/communityMain';

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