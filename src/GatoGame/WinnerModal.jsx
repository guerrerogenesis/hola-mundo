import Square from "./Square";
export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;
  const winnerText = winner === false ? "Empate" : "Ganó: ";
  return (
    <section className="fixed left-0 top-0 w-full h-full backdrop-brightness-50 text-white">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-72 h-72 bg-gray-800 rounded border-2 border-white flex flex-col justify-evenly p-5">
          <h2 className="text-3xl">{winnerText}</h2>
          {winner ? (
            <div className="text-4xl m-auto">
              <Square>{winner}</Square>
            </div>
          ) : null}
          <footer>
            <button
              onClick={resetGame}
              className="bg-white text-gray-800 p-2 rounded"
            >
              Empezar de nuevo
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
}
