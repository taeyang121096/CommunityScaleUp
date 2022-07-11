import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {validateEmail, validateId, validatePw, validateWhitespace, validateName} from '../utils/validateSignup'
import '../styles/components/Signup.css'

function Signup() { //회원가입

    const [Email, setEmail] = useState("")
    const [PwChk, setPwChk] = useState("")
    const [Name, setName] = useState("")
    const [Sex, setSex] = useState("")
    const [Id, setId] = useState("")
    const [Pw, setPw] = useState("")
    const [disabled, setDisabled] = useState(false); //disabled는 비활성화. false이므로 활성화가 기본.

    const handleIdChange = (Id) => {
        setId(Id.currentTarget.value);
      };

    const handlePwChange = (Pw) => {
        setPw(Pw.currentTarget.value);
      };
    
      const handleEmailChange = (Email) => {
        setEmail(Email.currentTarget.value);
      };

      const handlePwChkChange = (PwChk) => {
        setPwChk(PwChk.currentTarget.value);
      };

      const handleNameChange = (Name) => {
        setName(Name.currentTarget.value);
      };

      const handleSexChange = (Sex) => {
        setSex(Sex.currentTarget.value);
      };

    useEffect(() => {
        setDisabled(!(validateEmail(Email) && !(validateWhitespace(Email)) && 
        validateId(Id) && !(validateWhitespace(Id)) && 
        validatePw(Pw) && !(validateWhitespace(Pw)) &&
        validatePw(PwChk) && !(validateWhitespace(PwChk)) &&
        validateName(Name) && !(validateWhitespace(Name))
        ))
    }, [Email, Id, Pw, PwChk, Name])


    return (
        <div className='signup-container'>
            <form className='signup-form' >
                <div className='signup-title' >SIGN UP</div>
                <div className='signup-hr'></div>
                <div className='signup-email'>
                    이메일 <br/>
                <input type="email" value={Email} placeholder="EMAIL" onChange={handleEmailChange} />
                </div>
                <div>
                아이디 <br/>
                <input type="id" value={Id} placeholder="ID" onChange={handleIdChange} />
                </div>
                <div>
                <br/>비밀번호 <br/>
                <input type="password" value={Pw} placeholder="PASSWORD" onChange={handlePwChange} />
                </div>
                <div>
                <br/>비밀번호 확인 <br/>
                <input type="password" value={PwChk} placeholder="PASSWORD CHECK" onChange={handlePwChkChange} />
                </div>             
                <div>
                <br/>이름 <br/>
                <input type="name" value={Name} placeholder="NAME" onChange={handleNameChange} />
                </div>
                <br/>
                <div>
                성별 <br/>
                <input type="radio" name="gender" value={Sex} onChange={handleSexChange} /> Male
                <input type="radio" name="gender" value={Sex}  onChange={handleSexChange} /> Female
                </div>
                <br />
              
                <button className='signup-btn' type="submit" disabled={disabled}>
                    회원가입
                </button>
            </form>
        </div>

        
    )
}

export default Signup;