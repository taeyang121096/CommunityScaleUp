import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CommunityNavbar from './components/communityNavbar';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import '../../styles/community/VocView.css'

function VocView({location, history}){ 
    

    return(
    <>
        <CommunityNavbar/>
        <h2 align="center">게시글 상세정보</h2>
        <div className="voc-view-wrapper">
            <div className="voc-view-row">
                <label for="voc-number">게시글 번호</label>
                
            </div>
            <div className="voc-view-row">
                <label for="voc-title">제목</label>
                
            </div>
            <div className="voc-view-row">
                <label for="voc-date"> 작성일</label>
                
            </div>
            <div className="voc-view-row">
                <label for="voc-detail">내용</label>
                <div> 내용 들어감 어쩌구 저쩌구</div>
            </div>
            {/*<h4 align="right"><Link to ="/community">목록으로 돌아가기</Link></h4>*/}
            <button onClick={() => history.push('/community')}>목록으로</button>
        
            
        </div></>

    )

};


export default VocView;