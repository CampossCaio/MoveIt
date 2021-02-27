import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { CountDownContext } from "../contexts/CountDownConxtext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengeContext
  );

  const { resetCountDown } = useContext(CountDownContext);

  function handleChallengeSucceeded() {
    resetCountDown();
    completeChallenge();
  }

  function handleChallengeFailed() {
    resetCountDown();
    resetChallenge();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg `} />
            <strong>Novo desaio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFaileButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
