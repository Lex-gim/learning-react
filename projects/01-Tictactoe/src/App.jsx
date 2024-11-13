import confetti from 'canvas-confetti'
import { useState } from 'react'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import './App.css'

function App() {
  const [board, setBoard] = useState(()=> {
    console.log('Initialize State');
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    console.log('Initialize Turn');
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  //reset game and set everything to the initial values
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    //restringir posicion ocupada
    if(board[index] || winner) return
    
    //actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiar turno
    const newTurn = turn === TURNS.X?TURNS.O:TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(()=>{
        return newWinner
      })
    }else if(checkEndGame(newBoard)){
        setWinner(false) //empate
      }
  }

  return (
    <main className="board">
      <h1>oe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal
      winner={winner}
      resetGame={resetGame}
      />
    </main>
  )
}

export default App