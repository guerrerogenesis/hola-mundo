import { WINNER_COMBOS } from "../GatoGame/constants";
export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // si no hay ganador retorna null
    return null;
  };



  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };