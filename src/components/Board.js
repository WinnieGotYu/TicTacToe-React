import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  //boardState
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  //turnState
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = index => {
    const squares = [...boardSquares];
    if (squares[index] || calculateWinner(boardSquares)) return;
    //add X or O
    squares[index] = xIsNext ? "X" : "O";

    // set state for board, copy of squares array we mutated
    setBoardSquares(squares);
    // set state of turn, toggles
    setXisNext(!xIsNext);
  };

  //create a render square function
  const renderSquare = index => {
    return (
      <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    );
  };
  // take in an index
  // return a square with correct value and function

  function calculateWinner(squares) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    //loop through the set
    for (let i in winningLines) {
      //check to see if values in our squares array fulfill the winning reqruiements
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        // if so, return winner
        return squares[a];
      }
    }
    // else return nothing
    return null;
  }

  let status;
  const winner = calculateWinner(boardSquares);
  status = winner
    ? `Winner is: ${winner}`
    : `Current Player: ${xIsNext ? "X" : "O"}`;
  
  //If board filled and no space remaining 
  if(!boardSquares.includes(null)){
    status = 'IT IS A TIE'
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
