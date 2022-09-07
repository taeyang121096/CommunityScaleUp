import React from 'react';

const CommonTableColumn = ({ children }) => { //테이블 행
  return (
    <td className="common-table-column">
      {
        children
      }
    </td>
  )
}

export default CommonTableColumn;