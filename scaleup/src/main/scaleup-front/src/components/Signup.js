import React from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar'

function Signup(){
    return(
        <>
        <Router>
            <Navbar/>
            <div>회원 가입</div>
        </Router>
        </>
    )
}
export default Signup