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
        <p className="py-6 w-max text-2xl">Discover a universe of ideas, stories, and insights.</p>
      <Link href="/components/login" className="bg-black text-white font-bold px-10 py-3.5 rounded-3xl ">Get Started</Link>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Hero;
