import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled, { ThemeConsumer } from 'styled-components';
import CommunityNavbar from './components/communityNavbar';
import '../../styles/community/BulletinBoard02.css'
import { AiFillEdit } from "react-icons/ai";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser';
import moment from 'moment';
import Write from './Write';
import TimeCounting from 'time-counting'
import {
  getYear,
  getMonth,
  getDate,
  getHours,
  getMinutes,
  getSeconds,
  format
} from "date-fns";
import foramtDate from '../../utils/foramtDate';

function BulletinBoard02() {

  const [currentClick, setCurrentClick] = React.useState(null);
  const [prevClick, setPrevClick] = React.useState(null);
  const [writeContent, setWriteContent] = useState({ //입력한 내용 state에 저장
    title: '',
    content: '',
    category: ''
  })
  const [viewContent, setViewContent] = useState([]);
  const nowTime = moment().format('YY-MM-DD HH:mm:ss'); //현재 시간
  const date1 = new Date();
  format(date1, "yyyy-MM-dd HH:mm:ss");
  const [data, setData] = useState([]);

  const getTime = () => {
    //등록 버튼 누를 시, 년, 월, 일 별로 시간 가져와서 저장 후, 출력...?
    getYear(date1);
    getMonth(date1);
    getDate(date1);
    getHours(date1);
    getMinutes(date1);
    getSeconds(date1);
    console.log()
  }

  const getValue = e => { //name있는 값 가져와서 writeContent에 저장
    const { name, value } = e.target;
    setWriteContent({
      ...writeContent,
      [name]: value
    })
    console.log(writeContent);
  };

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

  const onClickWrite = () => {
    const url = "";
    const sendParam = {
      title: writeContent.title,
      content: writeContent.content,
      time: nowTime,
      category: writeContent.category
    }
    axios.post(url, sendParam)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
      })
  }

  //글 목록 받아오기
  useEffect(() => {
    axios.get('')
      .then(res => {
        setData(res.data); //setData에 저장
        console.log(res);
      })
      .catch((error) => {
        console.log(error.res);
      })
  }, []);


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
                    <th className='menu_item2'>날짜</th>
                    <th className='menu_item2'>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {viewContent.map(element =>
                    <tr className='table_content'>
                      <td></td>
                      <td>{element.category}</td>
                      <Link to=''><td>{element.title}</td></Link>
                      {/* <td>{ReactHtmlParser(element.content)}</td> */}
                      <td>{foramtDate("2022-09-10 20:50:13")}</td>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <br></br>
            <br></br>
            <Link to='/community/write'><button className='write_btn'><AiFillEdit />글쓰기</button></Link>
            <br></br>
            <br></br>

            <div className='form-wrapper'>
              <select onChange={getValue} name='category'>
                <option value="유머">유머</option>
                <option value="소식">소식</option>
                <option value="감동">감동</option>
                <option value="정보">정보</option>
              </select>
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
                  setWriteContent({
                    ...writeContent,
                    content: data
                  })
                  console.log(writeContent);
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
              setViewContent(viewContent.concat({ ...writeContent }));
              onClickWrite();
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