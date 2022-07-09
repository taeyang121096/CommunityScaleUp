import React, { useState, useEffect} from 'react'
import "./App.css"
import {validateId, validatePw, validateWhitespace} from "./util.js"
import { Link } from 'react-router-dom';

function Login() {

    const [Id, setId] = useState("")
    const [Pw, setPw] = useState("")
    const [disabled, setDisabled] = useState(false);

    const handleIdChange = (Id) => {
        setId(Id.currentTarget.value);
      };

      const handlePwChange = (Pw) => {
        setPw(Pw.currentTarget.value);
      };

      useEffect(() => {
        setDisabled(!(validateId(Id) && !(validateWhitespace(Id)) && validatePw(Pw) && !(validateWhitespace(Pw))))
      }, [Id, Pw])


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}>
                <div style={{fontSize:20, fontWeight:'bold', paddingBottom: 5}}>SIGN IN</div>
                <div style={{ width: "100%", textAlign: "center", borderTop: "1.4px solid black", paddingBottom: 20}}>
                </div>
                <div style={{marginBottom : '10px'}}>
                <input type="text" value={Id} placeholder="ID" onChange={handleIdChange} />
                </div>
                <div>
                <input type="password" value={Pw} placeholder="PASSWORD" onChange={handlePwChange} />
                </div>
                <br />
                <a className="acss" href="">비밀번호를 잊으셨습니까?</a>
                <button type="submit" disabled={disabled} style={{marginTop: 10}}>
                    로그인
                </button>
            </form>
        </div>
    )
}

export default Login