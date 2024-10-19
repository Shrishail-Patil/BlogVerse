'use client'
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className="navbar text-lg sticky top-0 px-6">
      <div className="navbar-start">
        <a href="" className="font-bold text-lg">
          BlogVerse
        </a>
      </div>
      <div className="navbar-center lg:flex">
        <ul className={styles.menu}>
          <li>
            <a className={styles.link}>Home</a>
          </li>
          <li>
            <a className={styles.link}>Blog</a>
          </li>
          <li>
            <a className={styles.link}>About</a>
          </li>
          <li>
            <a className={styles.link}>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      {/* <button onClick={()=>{theme? setTheme(false) : setTheme(true)
        console.log(theme)}}>{theme? "Dark" : "Light"}</button> */}
      </div>
    </div>
  );
};

export default Navbar;
