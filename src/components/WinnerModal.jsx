import { Square } from "./Square";
export function WinnerModal({ winner, resetGame}) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : `Ganador: `;

  return (
    <section className="winner">
      <div className="winner-text">
        <h2>{winnerText}</h2>
        <header className="winner-header">
          {winner && <Square> {winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Reiniciar</button>
        </footer>
      </div>
    </section>
  );
}
