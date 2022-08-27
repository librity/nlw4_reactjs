import { useContext } from "react";

import styles from "../styles/components/Profile.module.css";

import { ChallengesContext } from "../contexts/ChallengesContext";

export const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/librity.png" alt="Luis Geniole" />
      <div>
        <strong>Luis Geniole</strong>
        <p>
          <img src="icons/level.svg" alt="Current level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
