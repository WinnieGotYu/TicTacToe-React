import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  //boardState 
  const [boardSquares, setBoardSquares] = useState(Array(9).full(null));
  //turnState
  const [xIsNext, setXisNext] = useState(true);

  // passing in the index of the item that's clicked 
  const handleClick = (index) => {
    //copy of our board State
    const squares = [...boardSquares];
    // if sqaure has value, return 
    if(squares[index]) return;

    //add X or O 
    squares[index] = xIsNext ? "X" : "O";

    // set state for board, copy of squares array we mutated 
    setBoardSquares(squares);
    // set state of turn, toggles 
    setXisNext(!xIsNext);

  }

  //create a render square function
  const renderSquare = (index) => {
    return <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
  }
    // take in an index
      // return a square with correct value and function 

  return (
    <div>
      <div></div>
  <div>{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
  <div>{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
  <div>{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
    </div>
  );
}
 
export default Board;