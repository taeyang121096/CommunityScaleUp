import React from 'react';
import "./Card1.css";
import styled from "styled-components";

const Card1 = css`
  position: absolute;
  z-index: 3;
  right: 35px;
  top: 35px;
  cursor: pointer;
  ${easeSlow};
  &.closer {
    transform: rotate(180deg);
  }
`;

function images() {
    return (
        <div className="Card1">
            <div className="c1image">
                <img className="phoneImage" alt="iPhone_01" src="../public/images/Main.jpg" />
            </div>
        </div>
    )
}

export default images;