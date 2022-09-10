import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShopNavbar from './components/shopNavbar';
import '../../styles/shop/shopMain.css'

function ShopMain() { //SHOP 메인 페이지
    return(
        <>
        <ShopNavbar/>
        <div className='shop-main'>
            <div className='shop-container'>
            <div className='adv'>
                <h1 className='adv-title'>밤달샵</h1>
                <div className='adv-img'>
                    <img src='https://via.placeholder.com/750x250'/>
                </div>
            </div>
            <div className='discount-list'>
                <h3 className='discount-title'>오늘의 할인</h3>
                <div className='discount-img'>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                    </div>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                    </div>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                    </div>
                    <div className='imglist'>
                        <img src='https://via.placeholder.com/180x200'/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
    
}
export default ShopMain;