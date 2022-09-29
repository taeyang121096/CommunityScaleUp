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
import Signup from './components/Signup';
import Login from './components/Login';
import Write from './pages/community/Write';
import VocView from './pages/community/VocView';
import Copy from './pages/community/Copy';

function App() {
  return (
    <>
    <Router>
    <Routes>
                <Route path="/" exact={true} element = {<MainPage/>}/>
                <Route path="/sign-up" element = {<Signup/>}/>
                <Route path="/sign-in" element = {<Login/>}/>
                <Route path="/shop" element = {<ShopMain/>}/>
                <Route path="/community" element = {<BulletinBoard02/>}/>
                <Route path="/community/:no" element = {<></>}/>
                <Route path="/acc" element = {<Acc/>}/>
                <Route path="/toy" element = {<Toy/>}/>
                <Route path="/food" element = {<Food/>}/>
                <Route path="/clothes" element = {<Clothes/>}/>
                <Route path="/community/write" element = {<Write/>}/>
                <Route path="/vocview" element={<VocView/>}/>
                <Route path="/copy" element={<Copy/>}/>
                {/* <Route path="/postmain" element = {<PostMain/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;