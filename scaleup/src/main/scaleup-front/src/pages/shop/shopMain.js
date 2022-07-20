import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShopMenu from './shopMenu';
import ShopNavbar from './shopNavbar';
import '../../styles/shop/shopMain.css'

function ShopMain() { //SHOP 메인 페이지
    return(
        <>
        <ShopNavbar/>
        <div className='shop-container'>
            <div>
                <h2>밤달샵</h2>
                <div>
                    사진 4개
                </div>
            </div>
            <div>
                <h3>오늘의 할인</h3>
                <div>
                    사진 4개
                </div>
            </div>
        </div>
        </>
    )
    
}
export default ShopMain;