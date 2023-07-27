import styles from "./menu.module.css";
export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.linkContainer}>
        <div className={styles.aboutBackground}></div>
        <p>About</p>
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.aboutBackground}></div>
        <p>Education</p>
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.aboutBackground}></div>
        <p>Technologies</p>
      </div>
    </div>
  );
}