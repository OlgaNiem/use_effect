import { useState, useEffect } from "react";
import styles from '../styles/Timer.module.css' // Импортируем CSS-модуль

function Timer() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerOn) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const startTimer = (): void => {
    setTimeLeft(60); // Установить время таймера
    setTimerOn(true);
  };

  const stopTimer = (): void => {
    setTimerOn(false);
    setTimeLeft(0);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={styles["timer-container"]}>
      <h2>Timer: {formatTime(timeLeft)}</h2>
      {timerOn ? (
        <button className={styles["timer-button"]} onClick={stopTimer}>
          Stop timer
        </button>
      ) : (
        <button className={styles["timer-button"]} onClick={startTimer}>
          Start timer
        </button>
      )}
    </div>
  );
}

export default Timer;
