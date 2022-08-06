import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/main/Main';
import BulletinBoard01 from './pages/community/BulletinBoard01';
import BulletinBoard02 from './pages/community/BulletinBoard01';
import BulletinBoard03 from './pages/community/BulletinBoard01';
import BulletinBoard04 from './pages/community/BulletinBoard01';
import Food from './pages/shop/Food';
import Toy from './pages/shop/Toy';
import Acc from './pages/shop/Acc';
import Clothes from './pages/shop/Clothes';
import ShopMain from './pages/shop/shopMain';
import CoummunityMain from './pages/community/communityMain';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <Router>
    <Routes>
                <Route path="/" exact={true} element = {<MainPage/>}/>
                <Route path="/sign-up" element = {<Signup/>}/>
                <Route path="/sign-in" element = {<Login/>}/>
                <Route path="/shop" element = {<ShopMain/>}/>
                <Route path="/acc" element = {<Acc/>}/>
                <Route path="/toy" element = {<Toy/>}/>
                <Route path="/food" element = {<Food/>}/>
                <Route path="/clothes" element = {<Clothes/>}/>
                <Route path="/bulletinboard1" element = {<BulletinBoard01/>} />
                <Route path="/bulletinboard2" element = {<BulletinBoard02/>} /> 
                <Route path="/bulletinboard3" element = {<BulletinBoard03/>} /> 
                <Route path="/bulletinboard4" element = {<BulletinBoard04/>} /> 
                
                
        </Routes>
      </Router>
    </>
  );
}

export default App;