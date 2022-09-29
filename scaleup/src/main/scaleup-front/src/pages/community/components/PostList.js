import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'html-react-parser';

const PostList = ({ viewContent }) => {
  const {no, title, content, category, createDate, updateDate, views, writer} = viewContent;
    return (
        <tbody>
        {viewContent.map((element) => {
          <tr key={element.no} className='table_content'>
          <td>{element.no}</td>
          <td>{element.category}</td>
          <Link to='/vocview'><td>{element.title}</td></Link>
          <td>{ReactHtmlParser(element.content)}</td>
          <td>{element.createDate}</td>
          <td>{element.updateDate}</td>
          <td>{element.views}</td>
          <td>{element.writer}</td>
        </tr>
        })}
      </tbody>
    );
};

export default PostList;