import { useState } from 'react';
import './App.css';
import Square from './components/Square';
import { Helper } from './components/Helper';

function App() {
  const [squares, setSquare] = useState(Array(9).fill(null))
  const [isnext , setNext] = useState(true)
  // const status = "Next Player is " + "("+(isnext ? 'x' : 'O') +")"

  const winningInfo = Helper(squares);
  const winner = winningInfo.winner;
  const winnerHighLight = winningInfo.line;
  let status;
  if(winner){
    if(winner){
      status = "Hurray the winner is " + winner + " 😄 "
    }
    else if(winningInfo.isDraw){
        status = 'The match is Draw'
    }
    else{
      status = "Next Player is " + (isnext ? 'x' : 'O')
    }
  }

  function renderSquare(i){
    return (
      <Square
        onClick={()=>{
          const nextSquare = squares.slice();
          nextSquare[i]=isnext ? 'X' : 'O'
          setNext(!isnext)
          setSquare(nextSquare)
        }}
        value = {squares[i]}
        highLightWinner = {winnerHighLight && winnerHighLight.includes(i)}
      />
    )
  }
  return (
    <>
        <div className='status'>{status}</div>
      <div className='container'>
        <div className='board-raw'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-raw'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-raw'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
}

export default App;
