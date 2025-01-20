import { useState } from "react";
import Square from "./Square";
import { WinnerModal } from "./WinnerModal";
import confetti from "canvas-confetti";
import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "../utils/gatogame";


const GatoGameIndex = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); //false es empate, null no hay ganador.

  
  

  const updateBoard = (index) => {
    // no se actualiza la celda si ya hay un valor o si ya hay ganador
    if (board[index] || winner) return;

    //actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="w-fit m-auto text-center">
      <h1 className="text-3xl my-10">Gato Game</h1>
      <button
        onClick={resetGame}
        className="bg-white text-gray-800 p-2 rounded mb-10"
      >
        Reset
      </button>
      <section className="grid grid-cols-3 grid-rows-3 ">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              <span className="">{board[index]}</span>
            </Square>
          );
        })}
      </section>

      <section className="flex justify-evenly my-10">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
};
export default GatoGameIndex;
