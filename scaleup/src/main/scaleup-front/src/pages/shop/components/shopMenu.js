import React from 'react';
import '../../../styles/shop/components/shopMenu.css';
import { Link } from 'react-router-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { TbMenu2 } from "react-icons/tb";

function ShopMenu() { //SHOP 메뉴 (미완성)
    return( 
        <>
        <div className='menu-container'>
        <TbMenu2 size="20"/>
            <Link to='/' className = 'category'> 
                    카테고리
                </Link>
            <ul className='menu'>
                <li>
                    <Link to='/clothes' className='menu-links'>
                        의류
                    </Link>
                </li>
                <li>
                    <Link to='/toy' className='menu-links'>
                        장난감
                    </Link>
                </li>
                <li>
                    <Link to='/acc' className='menu-links'>
                        액세서리
                    </Link>
                </li>
                <li>
                    <Link to='/food' className='menu-links'>
                        사료
                    </Link>
                </li>
            </ul>
        </div>
        </>

    );
}
export default ShopMenu;