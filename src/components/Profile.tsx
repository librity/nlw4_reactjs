import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/librity.png" alt="Librity the I of Israel" />
      <div>
        <strong>Librity the I of Israel</strong>
        <p>
          <img src="icons/level.svg" alt="Current level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
