import { useState, useEffect } from "react";

import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  // const twentyFiveMinutes = 25 * 60;
  const twentyFiveMinutes = 2;

  const [timer, setTimer] = useState(twentyFiveMinutes);
  const [isCounting, setIsCounting] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => setIsCounting(true);
  const resetCountdown = () => {
    setTimer(twentyFiveMinutes);
    clearTimeout(countdownTimeout);
    setIsCounting(false);
  };

  useEffect(() => {
    if (isCounting && timer > 0) {
      countdownTimeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (isCounting && timer === 0) {
      setHasFinished(true);
      setIsCounting(false);
    }
  }, [isCounting, timer]);

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

      {hasFinished ? (
        <button disabled className={`${styles.countdownButton}`}>
          <span>Ciclo encerrado</span>
          <img src="icons/cycle_completed.svg" alt="Ciclo encerrado" />
        </button>
      ) : (
        <>
          {isCounting ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonCounting}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
