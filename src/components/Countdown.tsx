import { useState, useEffect } from "react";

import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const [timer, setTimer] = useState(25 * 60);
  const [counting, setCounting] = useState(false);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => setCounting(true);

  useEffect(() => {
    if (counting && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [counting, timer]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}
