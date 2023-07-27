"use client";
import { CSSProperties, useState } from "react";
import styles from "./menu.module.css";
export default function Menu() {
  const [selected, setSelected] = useState({
    about: true,
    education: false,
    technologies: false,
  });

  function handleClick(select: string) {
    setSelected(() => {
      return {
        about: select === "about" ? true : false,
        education: select === "education" ? true : false,
        technologies: select === "technologies" ? true : false,
      };
    });
  }
  console.log(selected.about);

  const selectedBackground: any = {};
  const selectedP: any = {};
  return (
    <div className={styles.menu}>
      <div
        className={`${styles.linkContainer} ${styles.about}`}
        onClick={() => handleClick("about")}
      >
        <div
          className={styles.aboutBackground}
          style={selected.about && selectedBackground}
        ></div>
        <p style={selected.about && selectedP}>About</p>
      </div>
      <br />
      <div
        className={`${styles.linkContainer} ${styles.education}`}
        onClick={() => handleClick("education")}
      >
        <div
          className={styles.educationBackground}
          style={selected.education && selectedBackground}
        ></div>
        <p style={selected.education && selectedP}>Education</p>
      </div>
      <br />
      <div
        className={`${styles.linkContainer} ${styles.technologies}`}
        onClick={() => handleClick("technologies")}
      >
        <div
          className={styles.technologiesBackground}
          style={selected.technologies && selectedBackground}
        ></div>
        <p style={selected.technologies && selectedP}>Technologies</p>
      </div>
    </div>
  );
}
