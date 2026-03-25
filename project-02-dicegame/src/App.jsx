import { useState } from "react";
import Button from "./Button";
import Board from "./Board";
import styles from "./App.module.css";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNumMe = random(6);
    const nextNumOther = random(6);
    setMyHistory([...myHistory, nextNumMe]);
    setOtherHistory([...otherHistory, nextNumOther]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  const myNum = myHistory[myHistory.length - 1] || 1;
  const otherNum = otherHistory[otherHistory.length - 1] || 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>주사위 게임!</h1>
        <div>
          <Button color="purple" onClick={handleRollClick}>
            던지기
          </Button>
        </div>
      </div>
      <hr className={styles.line} />
      <h2 className={styles.subTitle}>경기 결과</h2>
      <div className={styles.boards}>
        <Board
          name="나"
          color="purple"
          gameHistory={myHistory}
          isLoser={myNum < otherNum}
        />
        <Board
          name="상대방"
          color="red"
          gameHistory={otherHistory}
          isLoser={myNum > otherNum}
        />
      </div>
      <div className={styles.resetButton}>
        <Button color="navy" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>
    </div>
  );
}

export default App;
