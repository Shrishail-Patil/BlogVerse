'use client'
import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Blog from './blogs/Blog'
import Footer from './footer/Footer'
import styles from './landing.module.css'
import { motion } from 'framer-motion'
const LandingPage = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
    className={styles.landing}>
      <Navbar/>
      <Hero/>
      <Blog/>
      <Footer/>
    </motion.div>
  )
}

export default LandingPage
