import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled, { ThemeConsumer } from 'styled-components';
import CommunityNavbar from './components/communityNavbar';
import '../../styles/community/BulletinBoard02.css'
import { AiFillEdit } from "react-icons/ai";
import foramtDate from '../../utils/foramtDate';
import ReactHtmlParser from 'html-react-parser';
import PostList from './components/PostList';

function Copy() {

  const [currentClick, setCurrentClick] = React.useState(null);
  const [prevClick, setPrevClick] = React.useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [viewContent, setViewContent] = useState([{ //글 목록 받는
    no: '',
    category: '',
    title: '',
    content: '',
    createDate: '',
    updateDate: '',
    views: '',
    writer: ''
  }]);
  const [hits, setHits] = useState(0); //조회수

  // const GetClick = (e) => { //메뉴 색 클릭 시, 바꾸기
  //   setCurrentClick(e.target.id);
  //   console.log(e.target.id);
  // };

  // React.useEffect( //메뉴 색 클릭 시, 바꾸기
  //   (e) => {
  //     if (currentClick !== null) {
  //       let current = document.getElementById(currentClick);
  //       console.log(current);
  //       current.style.color = "black";
  //     }

  //     if (prevClick !== null) {
  //       let prev = document.getElementById(prevClick);
  //       prev.style.color = "white";
  //     }
  //     setPrevClick(currentClick);
  //   },
  //   [currentClick]
  // );

  const HandleHist = () => { //조회수

  }

  //글 목록 받아오기
  useEffect(() => {
    axios.get('/api/board/list')
      .then(res => {
        setViewContent(res.data); //setViewContent에 저장
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.res);
      })
  }, [setViewContent]);

  const postList = viewContent.map((element) => <div key={element.no}>{element.title}</div>)

  return (
    <div>
  {viewContent && 
        viewContent.map((element,no) => {
          return(
            <div key={element.no}>
              <div>{element.no}</div>
              <div>{element.title}</div>
            </div>
          )
        })}
        </div>
  )
      }
export default Copy;