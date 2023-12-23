import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hitesh</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 3 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <p className={styles.description}>
          Currently Pursuing MS Software Engineering Systems at Northeastern University, Seeking Co-op for summer 2024
        </p>
        <a href="mailto:sonetah@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
