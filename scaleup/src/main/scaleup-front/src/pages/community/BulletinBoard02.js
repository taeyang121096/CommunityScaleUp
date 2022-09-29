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

function BulletinBoard02() {

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

  const GetClick = (e) => { //메뉴 색 클릭 시, 바꾸기
    setCurrentClick(e.target.id);
    console.log(e.target.id);
  };

  React.useEffect( //메뉴 색 클릭 시, 바꾸기
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        console.log(current);
        current.style.color = "black";
      }

      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "white";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

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

  const array = Object.keys(viewContent);

  return (
    <>
      <CommunityNavbar />
      <div className='board2_main'>
        <div className='board2_container'>
          <h1>글목록</h1>
          <div className='search'>
            <input className='search_text' type="text"></input>
            <button>검색</button>
          </div>
          <table className='board2_group'>
                <thead>
                  <tr>
                    <th><button id="case1" className='group_btn' onClick={GetClick}>전체</button></th>
                    <th><button id="case2" className='group_btn' onClick={GetClick}>인기</button></th>
                    <th><button id="case3" className='group_btn' onClick={GetClick}>유머</button></th>
                    <th><button id="case4" className='group_btn' onClick={GetClick}>소식</button></th>
                    <th><button id="case5" className='group_btn' onClick={GetClick}>정보</button></th>
                    <th><button id="case6" className='group_btn' onClick={GetClick}>감동</button></th>
                  </tr>
                </thead>
          </table>
          <div className="ex">
            <br></br>
            <div className='movie-container'>
              <table className='board_table'>
                <thead className='table_menu'>
                  <tr>
                    <th className='menu_item1'>글번호</th>
                    <th className='menu_item2'>카테고리</th>
                    <th className='menu_item'>제목</th>
                    <th className='menu_item'>내용</th>
                    <th className='menu_item2'>등록 날짜</th>
                    <th className='menu_item2'>수정 날짜</th>
                    <th className='menu_item1'>조회수</th>
                    <th className='menu_item1'>작성자</th>
                  </tr>
                </thead>
                <tbody>
                {/* {viewContent && viewContent.map((element) => {
              return (
                  <tr className='table_content'>
                    <td>{element.no}</td>
                    <td>{element.category}</td>
                    <Link to='/vocview'><td>{element.title}</td></Link>
                    <td>{ReactHtmlParser(element.content)}</td>
                    <td>{element.createDate}</td>
                    <td>{element.updateDate}</td>
                    <td>{element.views}</td>
                    <td>{element.writer}</td>
                  </tr>
                  );
                })} */}
                </tbody>
              </table>
            </div>
            <br></br>
            <br></br>
            <Link to='/community/write'><button className='write_btn'><AiFillEdit />글쓰기</button></Link>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}
export default BulletinBoard02;

const Button = styled.button`
  background-color: ${props => props.color};
`;