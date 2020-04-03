import React from 'react'; 
import "../style/TicTacToe.css"
import Board from './Board';

const TicTacToe = (props) => {
  return (
      <div className="TicTacToe">
        <Board />
      </div>
  )
}

export default TicTacToe;

//square 
  // value (props)
  // onClick function 

// board 
  // state management for board and who's turn it is 
    // boardState 
    // turnState 
  // handleClick 
    // edit board when something is clicked, either X or O 
    // if the index of the board is filled return 
    // take copy of board state
    // mutate copy add X or O 
    // set the state of the board 
    // set the state of the turn 
  
  // function that calculates winner 
