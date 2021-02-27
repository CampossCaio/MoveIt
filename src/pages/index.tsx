import React from "react";
import { GetServerSideProps } from "next";

import { CompletedChallenges } from "../Components/CompletedChallenges";
import { CountDown } from "../Components/CountDown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";
import { ChallengeBox } from "../Components/ChallengeBox";

import Head from "next/head";

import styles from "../styles/Pages/Home.module.css";
import { CountDownProvider } from "../contexts/CountDownConxtext";
import { ChallengeProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props);
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengeCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const { level, currentExperience, challengeCompleted } = cxt.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted),
    },
  };
};
