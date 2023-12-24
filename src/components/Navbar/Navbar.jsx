import React, { useState,useEffect } from "react";
import r from "../Navbar/Resume.pdf"

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { saveAs } from 'file-saver';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [show,setShow]=useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 950) {
      setShow(true);
    }
    else{
      setShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const downloadResume = () => {
    const resumeFilePath = r; // Update with your actual file name and extension
    saveAs(resumeFilePath, 'Resume.pdf');
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        {show && <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />}
        
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
          <li>
            <a href="#" onClick={downloadResume}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
