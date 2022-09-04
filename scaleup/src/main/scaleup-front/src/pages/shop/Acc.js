import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../../styles/shop/Acc.css'
import ShopNavbar from './components/shopNavbar';
import Sidebar from './components/Sidebar';

function Acc(){
    return(
        <>
        <ShopNavbar/>
        <div className='acc-main'>
            <Sidebar/>
            <div className='acc-container'>
            <h1 className='acc-title'>액세서리</h1>
                <div className='best'>
                <h2 className='best-title'>오늘의 BEST</h2>
                    <div className='best-img'>
                    <div className='imglist'>
                        <img src='https://picsum.photos/180/200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://picsum.photos/180/200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://picsum.photos/180/200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://picsum.photos/180/200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                </div>
                </div>
                <hr></hr>
                <div className='acc-list'>
                    <h4 className='list-title'>????개의 상품</h4>
                    <div className='acc-img'>
                    <div className='imglist'>
                        <img src='https://picsum.photos/180/200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://picsum.photos/180/200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://picsum.photos/180/200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                    <div className='imglist'>
                        <img src='https://picsum.photos/180/200'/>
                        후르츠 봉봉 원피스
                        29000원
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>

    )
}
export default Acc