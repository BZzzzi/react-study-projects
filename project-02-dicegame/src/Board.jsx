import Dice from "./Dice";
import styles from "./Board.module.css";

function Board({ name, color, gameHistory, isLoser }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  const boardClassNames = `${styles.wrapper} ${isLoser ? styles.loser : ""}`;

  return (
    <div className={boardClassNames}>
      <div className={styles.subWrapper}>
        <h2 className={styles.title}>{name}</h2>
        <Dice color={color} num={num} />
      </div>
      <div className={styles.scoreWrapper}>
        <span className={styles.score}>{sum}</span>점
      </div>
      <div className={styles.gameHistory}>{gameHistory.join(", ")}</div>
    </div>
  );
}

export default Board;
