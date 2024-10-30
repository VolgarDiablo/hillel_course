import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeNavItem : ""}`
              }
            >
              Main
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeNavItem : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeNavItem : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className={styles.toggleButton} onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
