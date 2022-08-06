import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CommunityMenu from './components/communityMenu';
import CommunityNavbar from './components/communityNavbar';


function CommunityMain(){ //community 메인 페이지

    return(
    <>
        <CommunityNavbar/>
        <CommunityMenu/>        
    </>
    )

};

export default CommunityMain