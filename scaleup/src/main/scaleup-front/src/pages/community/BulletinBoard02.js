import React, {useState, useEffect}from 'react'
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { ThemeConsumer } from 'styled-components';
import CommunityNavbar from './components/communityNavbar';
import '../../styles/community/BulletinBoard02.css'

function Bulletinboard02() {

        const [currentClick, setCurrentClick] = React.useState(null);
        const [prevClick, setPrevClick] = React.useState(null);
        
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
                    <h3 className='board2_title'>게시판2</h3>
                    <br></br>
                    <br></br>
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
                    <br></br>
                    <table className='board_table'>
                        <thead className='table_menu'>
                            <tr>
                                <th className='menu_item'>카테고리</th>
                                <th className='menu_item'>제목</th>
                                <th className='menu_item'>작성자</th>
                                <th className='menu_item'>날짜</th>
                                <th className='menu_item'>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table_content'>
                                <td>유머</td>
                                <td>첫번째 게시글입니다.</td>
                                <td>아이스티</td>
                                <td>2022-10-25</td>
                                <td>6</td>
                            </tr>
                            <tr className='table_content'>
                                <td>감동</td>
                                <td>두번째 게시글입니다.</td>
                                <td>빙빙</td>
                                <td>2022-10-25</td>
                                <td>5</td>
                            </tr>
                            <tr className='table_content'>
                                <td>소식</td>
                                <td>세번째 게시글입니다.</td>
                                <td>무시무시한발바닥</td>
                                <td>2022-10-25</td>
                                <td>1</td>
                            </tr>
                            <tr className='table_content'>
                                <td>정보</td>
                                <td>네번째 게시글입니다.</td>
                                <td>경기대컴공생</td>
                                <td>2022-10-25</td>
                                <td>2</td>
                            </tr>
                            <tr className='table_content'>
                                <td>유머</td>
                                <td>다섯번째 게시글입니다.</td>
                                <td>가다라마바사</td>
                                <td>2022-10-25</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            </div>
        </>
    );

}
export default Bulletinboard02;

const Button = styled.button`
  background-color: ${props => props.color};
`;