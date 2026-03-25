import HandIcon from "./HandIcon";
import styles from "./HandButton.module.css";

function HandButton({ value, onClick }) {
  return (
    <button className={styles.handButton} onClick={onClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
