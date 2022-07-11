import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ImagesSlide from './Imageslide';
import Menubar from './Menubar';

function MainPage() {
    return(
    <>
    <Router>
        <Navbar/>
        <ImagesSlide/>
        <Menubar />
    </Router>
    </>
    )
}

export default MainPage