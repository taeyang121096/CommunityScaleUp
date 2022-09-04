import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import CommunityNavbar from './components/communityNavbar';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import VocHeader from './VocHeader';

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((voc) => (
    <CommonTableRow key={voc.id}>
      <CommonTableColumn>{voc.id}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/voc/${voc.id}`}>
          {voc.title}
        </Link>
      </CommonTableColumn>
      <CommonTableColumn>{voc.createAt}</CommonTableColumn>
      <CommonTableColumn>{voc.username}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function Voc() {
  const item = GetData();

  return (
  <>
  <CommunityNavbar/>
  <VocHeader></VocHeader>
    <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
      {item}
    </CommonTable>
  </>);
}
  
export default Voc;