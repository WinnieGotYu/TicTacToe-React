import React from "react";
import styled from "styled-components";

const SquareButton = styled.button`
  width: 20%;
  font-size: 4rem;
  border: 2px solid black;
  border-radius: 7px;
  text-align: center;
  padding: 0;
  background: none;
  cursor: pointer;
`;

const Square = props => {
  return (
    <SquareButton
      onClick={props.onClick}
    >
      {props.value}
    </SquareButton>
  );
};

export default Square;
