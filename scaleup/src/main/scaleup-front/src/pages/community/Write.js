import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AiFillEdit } from "react-icons/ai";
import CommunityNavbar from './components/communityNavbar';
import '../../styles/community/BulletinBoard02.css'
import { Link } from 'react-router-dom';
import { validateEmpty } from '../../utils/validateWrite.js'
import ReactHtmlParser from 'html-react-parser';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function Write() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let year = new Date().getFullYear();
  let month = new Date().getMonth()+1;
  let date = new Date().getDate();
  let time = new Date().getHours();
  let minute = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let date1 = String(year) + "/" + String(month) + "/" + String(date) + " " + String(time) + ":" + String(minute) + ":" + String(seconds); //등록 날짜
  let [registtime, setRegistTime] = useState([]);
  const [writeContent, setWriteContent] = useState({ //입력한 내용 state에 저장
    title: '',
    content: '',
    category: ''
  })

  const [viewContent, setViewContent] = useState([]);
  const [disabled, setDisabled] = useState(false); //disabled는 비활성화. false이므로 활성화가 기본.

  const getValue = e => { //name있는 값 가져와서 writeContent에 저장
    const { name, value } = e.target;
    setWriteContent({
      ...writeContent,
      [name]: value
    })
    console.log(writeContent);
  };

  useEffect(() => { //유효성 검사 모두 만족할 때,
    setDisabled(!((validateEmpty(writeContent.title)) && (validateEmpty(writeContent.content))))
  }, [writeContent.title, writeContent.content])

  const onClickWrite = () => { //내가 쓴 글 보내기
    const url = "/api/board/test";
    const sendParam = {
      title: writeContent.title,
      content: writeContent.content,
      category: writeContent.category,
      time: registtime[registtime.length-1],
    }
    axios.post(url, sendParam)
      .then((res) => {
        console.log(res);
        alert('등록 완료');
        // <Alert severity="success">등록 완료!</Alert>
        window.location.href = "/#/community";
      })
      .catch((error) => {
        console.log(error.response);
      })
  }

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    fontFamily: [
      '-apple-system'
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
  });

  return (
    <>
      <CommunityNavbar />
      <br></br>
      <div className='ex'>
        <h1>글쓰기</h1>
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
            data=""
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
        <br></br>
        <br></br>
        <Stack className='write_btn2' spacing={2} direction="row">
          <BootstrapButton variant="contained" className="submit-button" disabled={disabled} onClick={() => {
            setViewContent(viewContent.concat({ ...writeContent }));
            let copy = [...registtime];
            copy.push(date1); //앞에 새로운 배열값 추가
            setRegistTime(copy);
            onClickWrite();
          }}><AiFillEdit />등록</BootstrapButton><Link to='/community' style={{ textDecoration: 'none' }}><Button className="submit-button2" variant="outlined">돌아가기</Button></Link>
        </Stack>
        <br></br>
      <br></br>
      </div>
    </>

  )
}

export default Write;