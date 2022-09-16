import React, {useState, useEffect}from 'react'
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import moment from 'moment';
import { AiFillEdit } from "react-icons/ai";
import CommunityNavbar from './components/communityNavbar';
import '../../styles/community/BulletinBoard02.css'
import { Link } from 'react-router-dom';
import {validateEmpty} from '../../utils/validateWrite.js'

function Write() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [writeContent, setWriteContent] = useState({ //입력한 내용 state에 저장
    title: '',
    content: '',
    category: ''
  })

  const nowTime = moment().format('MM-DD HH:mm:ss'); //현재 시간

  const [viewContent, setViewContent] = useState([]);
  const [disabled, setDisabled] = useState(false); //disabled는 비활성화. false이므로 활성화가 기본.

  const getValue = e => {
    const { name, value } = e.target;
    setWriteContent({
      ...writeContent,
      [name]: value
    })
    console.log(writeContent);
  };

  useEffect(() => { //유효성 검사 모두 만족할 때,
    setDisabled(!((validateEmpty(writeContent.title))&&(validateEmpty(writeContent.content))))
}, [writeContent.title, writeContent.content])

  const onClickWrite = () => { //내가 쓴 글 보내기
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
        alert('등록 완료');
      })
      .catch((error) => {
        console.log(error.response);
      })
  }

    return(
        <>
        <CommunityNavbar/>
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
                name='title'/>
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
            <button className="submit-button" disabled={disabled} onClick={() => {
              setViewContent(viewContent.concat({ ...writeContent }));
              onClickWrite();
            }}><AiFillEdit />등록</button> <Link to='/community'><button className="submit-button2">돌아가기</button></Link>
            </div>
            <br></br>
            <br></br>
        </>

    )
}

export default Write;