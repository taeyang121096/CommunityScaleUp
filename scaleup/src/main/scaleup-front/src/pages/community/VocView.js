import React, {useEffect, useState} from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CommunityNavbar from './components/communityNavbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import '../../styles/community/VocView.css'

function VocView({location, history}){ 
    const [postData, setPostData] = useState({
        no : '',
        category : '',
        title : '',
        content : '',
        createDate : '',
        views : '',
        writer : ''
    });

    useEffect(() => { //게시물 불러오기
        axios.get('/api/board/{boardNo}')
          .then(res => {
            setPostData(res.data.postData); //setPostData에 저장
            console.log(res);
          })
          .catch((error) => {
            console.log(error.res);
          })
      }, [setPostData]);
    

    return(
    <>
        <CommunityNavbar/>
        <br></br>
        <h2 align="center">게시글 상세정보</h2>
        <div className="voc-view-wrapper">
            <div className='voc-view-content'>
            <div className="voc-view-row">
                <label for="voc-number">카테고리</label>
                
            </div>
            <div className="voc-view-row">
                <label for="voc-title">제목</label>
                
            </div>
            <div className="voc-view-row">
                <label for="voc-date"> 작성일</label>
                
            </div>
            <div className="voc-view-row">
                <label for="voc-date"> 조회수</label>
                
            </div>
            <div className="voc-view-row">
                <label for="voc-date"> 작성시간</label>
                
            </div>
            <div className="voc-view-row">
                <label for="voc-date"> 작성자</label>
                
            </div>
            <div className="voc-view-row">
                <label for="voc-detail">내용</label>
                <div> 내용 들어감 어쩌구 저쩌구</div>
            </div>
            {/*<h4 align="right"><Link to ="/community">목록으로 돌아가기</Link></h4>*/}
            <br></br>
            </div>
            <Link to='/community'><button className="to-bulletinboard02-button2">목록으로</button></Link>       
        </div>
        </>

    )

};


export default VocView;