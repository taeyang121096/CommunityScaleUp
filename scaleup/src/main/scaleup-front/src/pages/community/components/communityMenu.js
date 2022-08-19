import React from 'react';
import '../../../styles/community/components/communityMenu.css';
import { Link } from 'react-router-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import CommunityMain from '../communityMain';

function CommunityMenu() { 
    return( 
        <>
        
        <div className='community-container'>
            <ul className='menu'>
                <li>
                    <Link to='/bulletinboard01' className='menu-links'>
                        게시판1
                    </Link>
                </li>
                <li>
                    <Link to='/bulletinboard02' className='menu-links'>
                        게시판2
                    </Link>
                </li>
                <li>
                    <Link to='/bulletinboard03' className='menu-links'>
                        게시판3
                    </Link>
                </li>
                <li>
                    <Link to='/bulletinboard04' className='menu-links'>
                        게시판4
                    </Link>
                </li>
            </ul>
        </div>
        </>

    );
}
export default CommunityMenu;