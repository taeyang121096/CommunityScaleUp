import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function menu() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className = 'menu'>
            <div className = 'menu-container'>
                {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/shop' className='nav-links' onClick = {closeMobileMenu}>
                            SHOP
                        </Link>
                    </li>     
                    <li className='nav-item'>
                        <Link to='/community' className='nav-links' onClick = {closeMobileMenu}>
                           COMMUNITY
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pay' className='nav-links' onClick = {closeMobileMenu}>
                           PAY
                            <i className="fa fa-user" aria-hidden="true"/>
                        </Link>                 
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar