import React, { useState, useEffect} from 'react'
import {validateId, validatePw, validateWhitespace} from "../utils/validateLogin"
import axios from 'axios';

const containerStyle = {
  display: "inline-table",
  float: "right",
  height: "100%",
  borderTop: "4px solid black",
  borderLeft: "4px solid black",
  borderBottom: "4px solid black",
  borderRadius: "0 0 0 20px",
};

const loginFormStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  marginRight: "20px;",
  marginLeft: "20px",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "25px",
  fontWeight: "bold",
  paddingBottom: "5px"
};

const hrStyle = {
  width: "100%",
  textAlign: "center",
  borderTop: "1.4px solid black",
  paddingBottom: "17px"
};

const idStyle = {
  marginBottom: "10px"
};

const aStyle = {
  height: "30px",
  textDecoration: "none",
  color: "black",
  fontSize: "13px"
};

function Login() {

    const [Id, setId] = useState("")
    const [Pw, setPw] = useState("")
    const [disabled, setDisabled] = useState(false); //disabled는 비활성화. false이므로 활성화가 기본.
    const [loginOpen, setloginOpen] = useState(false);


    const handleIdChange = (Id) => {
        setId(Id.currentTarget.value);
      };

      const handlePwChange = (Pw) => {
        setPw(Pw.currentTarget.value);
      };

      useEffect(() => {
        setDisabled(!(validateId(Id) && !(validateWhitespace(Id)) && validatePw(Pw) && !(validateWhitespace(Pw))))
      }, [Id, Pw])

      //로그인 버튼 클릭 시, 정보 보내기
      const onClickLogin = (id, password) => {
        axios.post('',null, {

        })
      }


    return (
        <div className='container' style={containerStyle}>
            <form className='loginForm' style={loginFormStyle} action="" method="post">
                <div className='title' style={titleStyle}>SIGN IN</div>
                <div className='hr' style={hrStyle}>
                </div>
                <div>
                <input className='id' style={idStyle} type="text" value={Id} placeholder="ID" onChange={handleIdChange} />
                </div>
                <div>
                <input className='pw' type="password" value={Pw} placeholder="PASSWORD" onChange={handlePwChange} />
                </div>
                <br />
                <a href="" style={aStyle}>비밀번호를 잊으셨습니까?</a>
                <button type="submit" disabled={disabled}>
                    로그인
                </button>
            </form>
        </div>
    )
}

export default Login