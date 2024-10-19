import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Blog from './blogs/Blog'
import Footer from './footer/Footer'
import styles from './landing.module.css'
const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <Navbar/>
      <Hero/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default LandingPage
