import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.activeChallenge}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faca uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
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
}
