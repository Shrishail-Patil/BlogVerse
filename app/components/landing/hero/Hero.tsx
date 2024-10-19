import React from "react";
import styles from "./Hero.module.css";
import Link from 'next/link'

const Hero = () => {
  return (
  <div className={styles.hero}>
  <div className="hero top-0">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-7xl font-bold">Hello there</h1>
        <p className="py-6 w-max text-2xl mb-5">Discover a universe of ideas, stories, and insights.</p>
      <Link href="/components/auth/login" className={styles.btn}>Get Started</Link>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Hero;
