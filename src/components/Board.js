import React, { useState } from "react";
import Square from "./Square";
import styled from "styled-components";

const TicTacToeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 7.5vw;
  text-align: center;
  margin: 1rem 0 1rem 0;
`;

const Status = styled.h2`
  font-size: 6vw;
  text-align: center;
  margin: 0 0 1rem 0;
`;

const BoardRow = styled.div`
  display: flex;
  justify-content: center;
  height: 20vw;
`;

const StartButton = styled.button`
  font-size: 3vw;
  padding: 1vh;
  background: lightyellow;
  border-radius: 5px;
  width: 40vw;
  font-weight: 600;
  margin-top: 1rem;
  margin-left: 20vw;
`;

const Img = styled.img`
  height: 40vh;
  width: 40vw;
  margin-bottom: 1rem;
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Board = () => {
  //boardState
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  //turnState
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = index => {
    //make copy of board
    const squares = [...boardSquares];
    //stop clicks on exisiting square and if game is won
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
      <Square
        value={boardSquares[index]}
        onClick={() => handleClick(index)}
        winningIdx={winner}
      />
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
        // if so, return winner and indices of winning square
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
  if (!boardSquares.includes(null) && !winner) {
    status = "IT IS A TIE";
  }

  const restart = () => {
    setBoardSquares(Array(9).fill(null));
  };

  return (
    <TicTacToeWrapper>
      <Title>Tic Tac Toe</Title>
      <Status>{status}</Status>
      <ImgWrapper>
        {winner ? (
          <Img
            src="https://media.giphy.com/media/t7sks6pQZmmBOJD1BT/giphy.gif"
            alt="Winning Gif"
          />
        ) : (
          <div />
        )}
      </ImgWrapper>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>{" "}
      <StartButton onClick={() => restart()}> New Game</StartButton>
    </TicTacToeWrapper>
  );
};

export default Board;
