import React from 'react'
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoummunityNavbar from './components/communityNavbar';
import '../../styles/community/Bulletinboard2.css'

function Bulletinboard2() {
    return (
        <>
            <CoummunityNavbar />
            <div className='board2_main'>
                <div className='board2_container'>
                    <h2>게시판2</h2>
                    <table className='board_table'>
                        <thead>
                            <tr>
                                <th>글번호</th>
                                <th>제목</th>
                                <th>등록일</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>첫번째 게시글입니다.</td>
                                <td>2020-10-25</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>두번째 게시글입니다.</td>
                                <td>2020-10-25</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>세번째 게시글입니다.</td>
                                <td>2020-10-25</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>네번째 게시글입니다.</td>
                                <td>2020-10-25</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>다섯번째 게시글입니다.</td>
                                <td>2020-10-25</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}
export default Bulletinboard2