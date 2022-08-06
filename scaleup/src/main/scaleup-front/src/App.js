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
import CommunityMain from './pages/community/components/communityMain';
import CommunityMenu from './pages/community/components/communityMenu';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <Router>
    <Routes>
                <Route path="/" exact={true} element = {<MainPage/>}/>
                <Route path="/sign-up" element = {<Signup/>}/>
                <Route path="/shop" element = {<ShopMain/>}/>
                <Route path="/communitymain" element = {<CommunityMain/>}/>
                <Route path="/communitymenu" element = {<CommunityMenu/>}/>
                <Route path="/acc" element = {<Acc/>}/>
                <Route path="/toy" element = {<Toy/>}/>
                <Route path="/food" element = {<Food/>}/>
                <Route path="/clothes" element = {<Clothes/>}/>
                <Route path="/bulletinboard01" element = {<BulletinBoard01/>} />
                <Route path="/bulletinboard02" element = {<BulletinBoard02/>} /> 
                <Route path="/bulletinboard03" element = {<BulletinBoard03/>} /> 
                <Route path="/bulletinboard04" element = {<BulletinBoard04/>} /> 
                
                
        </Routes>
      </Router>
    </>
  );
}

export default App;