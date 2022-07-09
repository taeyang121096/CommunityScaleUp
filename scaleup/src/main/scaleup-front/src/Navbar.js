import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className = 'navbar-logo' >
                    BAMDAL 
                </Link>
                <ul className= 'nav-menu'>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' >
                            SIGN UP
                        </Link>
                    </li>     
                    <li className='nav-item'>
                        <Link to='/sign-in' className='nav-links' >
                           SIGN IN
                           <i className="fa fa-user" />{/*아이콘 */}
                        </Link>                 
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar