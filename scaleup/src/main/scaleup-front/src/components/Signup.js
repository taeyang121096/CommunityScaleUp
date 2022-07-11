import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Signup() { //회원가입

    const [Email, setEmail] = useState("")
    const [PwChk, setPwChk] = useState("")
    const [Name, setName] = useState("")
    const [Sex, setSex] = useState("")
    const [Id, setId] = useState("")
    const [Pw, setPw] = useState("")


    //const [disabled, setDisabled] = useState(false);

    //유효성검사
    /*const [EmailCheck, setEmailChk] = useState(false);
    const [passwordDoubleCheck, setPwDoublechk] = useState(false);*/


    //email & 비밀번호 정규식  
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

  
  const EmailCheck = (Email) => {
    return emailRegEx.test(Email); //형식에 맞을 경우, true 리턴
  }
  const Pwchk = (password) => {
    if(password.match(passwordRegEx)===null) { //형식에 맞지 않을 경우 아래 콘솔 출력
      console.log('비밀번호 형식을 확인해주세요');
      return;
    }else{ // 맞을 경우 출력
      console.log('비밀번호 형식이 맞아요');
    }
  }
  const passwordDoubleCheck = (password, PwChk) => {
    if(password !== PwChk){
      console.log('비밀번호가 다릅니다.');
      return;
    }else{
      console.log('비밀번호가 동일합니다');
    }
  }

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

    // useEffect(() => {
    //     setDisabled(!(validateId(Id) && !(validateWhitespace(Id)) && validatePw(Pw) && !(validateWhitespace(Pw))))
    // }, [Id, Pw])


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}>
                <div style={{fontSize:20, fontWeight:'bold', paddingBottom: 5}}>SIGN UP</div>
                <div style={{ width: "100%", textAlign: "center", borderTop: "1.4px solid black", paddingBottom: 20}}>
                </div>
                <div style={{marginBottom : '10px'}}>
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
                <input type="text" value={PwChk} placeholder="PASSWORD CHECK" onChange={handlePwChkChange} />
                </div>             
                <div>
                <br/>이름 <br/>
                <input type="name" value={Name} placeholder="NAME" onChange={handleNameChange} />
                </div>
                <br/>
                <div>
                성별 <br/>
                <input type="radio" value={Sex} onChange={handleSexChange} /> Male
                <input type="radio" value={Sex}  onChange={handleSexChange} /> Female
                </div>
                <br />
                
                <button type="submit" style={{marginTop: 10}}>
                    회원가입
                </button>
            </form>
        </div>

        
    )
}

export default Signup;