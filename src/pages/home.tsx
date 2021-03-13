import React from "react";
import { CompletedChallenges } from "../Components/CompletedChallenges";
import { CountDown } from "../Components/CountDown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";
import { ChallengeBox } from "../Components/ChallengeBox";

import Head from "next/head";

import styles from "../styles/Pages/Home.module.css";
import { CountDownProvider } from "../contexts/CountDownConxtext";
import { SideBar } from "../Components/SideBar";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />

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
    </div>
  );
}
