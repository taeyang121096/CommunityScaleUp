import React, { useState, useEffect } from 'react'
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { ThemeConsumer } from 'styled-components';
import CommunityNavbar from './components/communityNavbar';
import '../../styles/community/BulletinBoard02.css'
import { AiFillEdit } from "react-icons/ai";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser';
import moment from 'moment';


function BulletinBoard02() {

  const [currentClick, setCurrentClick] = React.useState(null);
  const [prevClick, setPrevClick] = React.useState(null);
  const [movieContent, setMovieContent] = useState({ //입력한 내용 state에 저장
    title: '',
    content: '',
    time: ''
  })
  const [viewContent, setViewContent] = useState([]);
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

  const getValue = e => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value
    })
    console.log(movieContent);
  };

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
    console.log(e.target.id);
  };

  React.useEffect(
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
                    <th className='menu_item'>카테고리</th>
                    <th className='menu_item'>제목</th>
                    <th className='menu_item'>내용</th>
                    <th className='menu_item'>날짜</th>
                  </tr>
                </thead>
                <tbody>
                  {viewContent.map(element =>
                    <tr className='table_content'>
                      <td>유머</td>
                      <td>{element.title}</td>
                      <td>{ReactHtmlParser(element.content)}</td>
                      <td>{nowTime}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <br></br>
            <br></br>
            <button className='write_btn'><AiFillEdit />글쓰기</button>
            <br></br>
            <br></br>

            <div className='form-wrapper'>
              <input className="title-input" type='text' placeholder='제목' onChange={getValue}
                name='title' />
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                  setMovieContent({
                    ...movieContent,
                    content: data
                  })
                  console.log(movieContent);
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              />
            </div>
            <button className="submit-button" onClick={() => {
              setViewContent(viewContent.concat({ ...movieContent }));
            }}><AiFillEdit />등록</button>
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