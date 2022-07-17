import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ShopMenu from './shopMenu';
import ShopNavbar from './shopNavbar';
import '../../styles/shop/shopMain.css'

function ShopMain() { //SHOP 메인 페이지
    return(
        <>
        
        <ShopNavbar/>
        <ShopMenu/>
        <div className='shop-container'>

        </div>
        </>
    )
    
}
export default ShopMain;