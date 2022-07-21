import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShopNavbar from './shopNavbar';
import Sidebar from './Sidebar';
import '../../styles/shop/Food.css'

function Food() {
    return(
        <>
        <ShopNavbar/>
        <div className='food-main'>
            <Sidebar/>
            <div className='food-container'>
            <h1 className='food-title'>사료</h1>
                <div className='best'>
                <h2 className='best-title'>오늘의 BEST</h2>
                    <div className='best-img'>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                </div>
                </div>
                <hr></hr>
                <div className='food-list'>
                    <h4 className='list-title'>????개의 상품</h4>
                    <div className='food-img'>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Food