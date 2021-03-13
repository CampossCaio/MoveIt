import styles from "../styles/components/SideBar.module.css";
import { FiHome, FiAward, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/router";

export function SideBar() {
  const [selectedButton, setSelectedButton] = useState("home");

  const route = useRouter();
  console.log(route);
  function handleNavigateToHome(buttonName: string) {
    setSelectedButton(buttonName);
    route.push("/home");
  }

  function handleNavigateToLeaderboard(buttonName: string) {
    setSelectedButton(buttonName);
    route.push("/leaderboard");
  }

  return (
    <div className={styles.container}>
      <img src="logo.png" alt="Moveit" />
      <nav>
        <button
          className={route.pathname === "/home" ? styles.selected : ""}
          type="button"
          onClick={() => handleNavigateToHome("home")}
        >
          <div className={route.pathname === "/home" ? styles.selected : ""} />
          <FiHome />
        </button>
        <button
          className={route.pathname === "/leaderboard" ? styles.selected : ""}
          type="button"
          onClick={() => handleNavigateToLeaderboard("award")}
        >
          <div
            className={route.pathname === "/leaderboard" ? styles.selected : ""}
          />
          <FiAward />
        </button>
      </nav>

      <button onClick={() => route.push("/")} className={styles.btnLogout}>
        <FiLogOut />
      </button>
    </div>
  );
}
