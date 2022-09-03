import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/main/Main';
import BulletinBoard02 from './pages/community/BulletinBoard02';
import Food from './pages/shop/Food';
import Toy from './pages/shop/Toy';
import Acc from './pages/shop/Acc';
import Clothes from './pages/shop/Clothes';
import ShopMain from './pages/shop/shopMain';
import CommunityMenu from './pages/community/components/communityMenu';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <>
    <Router>
    <Routes>
                <Route path="/" exact={true} element = {<MainPage/>}/>
                <Route path="/sign-up" element = {<Signup/>}/>
                <Route path="/sign-in" element = {<Login/>}/>
                <Route path="/shop" element = {<ShopMain/>}/>
                <Route path="/communitymain" element = {<BulletinBoard02/>}/>
                <Route path="/communitymenu" element = {<CommunityMenu/>}/>
                <Route path="/acc" element = {<Acc/>}/>
                <Route path="/toy" element = {<Toy/>}/>
                <Route path="/food" element = {<Food/>}/>
                <Route path="/clothes" element = {<Clothes/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;