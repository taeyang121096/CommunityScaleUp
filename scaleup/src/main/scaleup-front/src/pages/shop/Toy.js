import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../../styles/shop/Toy.css'
import ShopNavbar from './components/shopNavbar';
import Sidebar from './components/Sidebar';

function Toy() {
    return(
        <>
        <ShopNavbar/>
        <div className='toy-main'>
            <Sidebar/>
            <div className='toy-container'>
            <h1 className='toy-title'>장난감</h1>
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
                <div className='toy-list'>
                    <h4 className='list-title'>????개의 상품</h4>
                    <div className='toy-img'>
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
export default Toy