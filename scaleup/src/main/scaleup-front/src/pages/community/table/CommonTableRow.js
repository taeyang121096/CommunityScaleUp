import React from 'react';

const CommonTableRow = ({ children }) => { //테이블 열
  return (
    <tr className="common-table-row">
      {
        children
      }
    </tr>
  )
}

export default CommonTableRow;