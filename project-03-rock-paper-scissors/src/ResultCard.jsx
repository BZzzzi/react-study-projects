import HandIcon from "./HandIcon";
import styles from "./ResultCard.module.css";

function ResultCard({ name, hand, score, result }) {
  const ClassNames = [
    styles.resultCard,
    result === "승리" ? styles.winner : "",
    result === "패배" ? styles.loser : "",
  ].join(" ");

  return (
    <div className={ClassNames}>
      <div className={styles.victory}>승리</div>
      <p className={styles.name}>{name}</p>
      <HandIcon value={hand} />
      <p className={styles.score}>{score}</p>
    </div>
  );
}

export default ResultCard;
