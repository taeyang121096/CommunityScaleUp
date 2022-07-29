import React, { useState, useEffect} from 'react'
import '../styles/components/Login.css'
import {validateId, validatePw, validateWhitespace} from "../utils/validateLogin"
import axios from 'axios';

function Login() { //로그인

    const [Id, setId] = useState("")
    const [Pw, setPw] = useState("")
    const [disabled, setDisabled] = useState(false); //disabled는 비활성화. false이므로 활성화가 기본.

    const handleIdChange = (Id) => {
        setId(Id.currentTarget.value);
      };

      const handlePwChange = (Pw) => {
        setPw(Pw.currentTarget.value);
      };

      useEffect(() => { //유효성 검사 모두 만족할 때,
        setDisabled(!(validateId(Id) && !(validateWhitespace(Id)) && validatePw(Pw) && !(validateWhitespace(Pw))))
      }, [Id, Pw])

      //로그인 버튼 클릭 시, 정보 보내기인데 미완성..
      const onClickLogin = (id, password) => {
          axios({
              method: 'post',
              url: '/api/user/login',
              data: {
                  userId: id,
                  pw: password
              }
          });
      }


    return (
         <div className='container'>
            <form className='loginForm' action="" method="post">
                <div className='title'>SIGN IN</div>
                <div className='hr'>
                </div>
                <div>
                <input className='id' type="text" value={Id} placeholder="ID" onChange={handleIdChange} />
                </div>
                <div>
                <input className='pw' type="password" value={Pw} placeholder="PASSWORD" onChange={handlePwChange} />
                </div>
                <br />
                <a className='acss' href="">비밀번호를 잊으셨습니까?</a>
                <button type="submit" disabled={disabled} onClick={onClickLogin(Id, Pw)}>
                    로그인
                </button>
            </form>
         </div>
    )
}

export default Login