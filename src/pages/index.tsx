import { useState, FocusEvent, useContext } from "react";

import styles from "../styles/Pages/SignIn.module.css";
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";

export default function SignIn() {
  const [isFilled, setIsFilled] = useState(false);
  const [username, setUsername] = useState("");

  const { user, signIn } = useContext(AuthContext);

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    if (event.target.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }

  function handleFocus() {
    setIsFilled(true);
  }

  function handleSignIn() {
    signIn(username);
  }

  return (
    <div className={styles.container}>
      <section>
        <img src="/simbolo.png" alt="moveit" />
      </section>
      <section>
        <div className={styles.formContainer}>
          <img src="/signLogo.svg" alt="moveit" />
          <h1>Bem-vindo</h1>
          <span>
            <img src="/githubLogo.png" alt="github" />
            Faça login com seu Github
            <br /> para começar
          </span>
          <div>
            <input
              type="text"
              placeholder="Digite seu username"
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              type="button"
              className={isFilled ? styles.isFilled : ""}
              onClick={handleSignIn}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
