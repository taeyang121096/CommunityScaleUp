import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../../styles/community/BulletinBoard04.css'
import CommunityNavbar from './components/communityNavbar';
import Sidebar from './components/Sidebar';

function BulletinBoard04(){
    return(
        <>
        <CommunityNavbar/>
        <div className='board-main'>
            <div className='board-container'>
            <h1 className='board-title'>보드 4 확인용</h1>
            </div>
        </div>
                        
        </>
    )

}

export default BulletinBoard04
