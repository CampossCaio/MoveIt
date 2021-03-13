import styles from "../styles/Pages/Leaderboard.module.css";
import Head from "next/head";
import { SideBar } from "../Components/SideBar";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChallengeContext } from "../contexts/ChallengesContext";

export default function Leaderboard() {
  const { user } = useContext(AuthContext);
  const { level, challengeCompleted, currentExperience } = useContext(
    ChallengeContext
  );

  return (
    <div style={{ display: "flex" }}>
      <>
        <SideBar />

        <div className={styles.container}>
          <Head>
            <title>Leaderboard | move.it</title>
          </Head>
          <header>
            <h1>Leaderboard</h1>
          </header>

          <div className={styles.contentContainer}>
            <div className={styles.contentLabel}>
              <span>POSIÇÃO</span>
              <span>USUÁRIO</span>
              <span>DESAFIOS</span>
              <span>EXPERIÊNCIA</span>
            </div>
            <div className={styles.content}>
              <span>1</span>
              <div className={styles.userInfo}>
                <img src={user.avatar_url} alt={user.name} />
                <div>
                  <span>{user.name}</span>
                  <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                  </p>
                </div>
              </div>
              <span>
                <p>{challengeCompleted}</p> completados
              </span>
              <span>
                <p>{currentExperience}</p> xp
              </span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
