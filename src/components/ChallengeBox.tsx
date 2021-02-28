import { useContext } from "react";

import styles from "../styles/components/ChallengeBox.module.css";

import { ChallengesContext } from "../contexts/ChallengesContext";

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.activeChallenge}>
          <header>Ganhe {activeChallenge.experience} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeCompletedButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.noActiveChallenge}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level_up.svg" alt="Level up" />
            Avance para o proximo nivel completando desafios
          </p>
        </div>
      )}
    </div>
  );
};
