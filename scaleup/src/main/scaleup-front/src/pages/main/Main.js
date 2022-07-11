import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ImagesSlide from './Imageslide';
import Menubar from './Menubar';

function MainPage() {
    return(
    <>
        <Navbar/>
        <ImagesSlide/>
        <Menubar />
    </>
    )
}

export default MainPage