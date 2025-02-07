// components/Hero.js
import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}><span>E</span>xpert Web Developer <br></br>in Melbourne</h1>
            <p className={styles.heroSubtitle}>Looking for a professional web developer in Melbourne? we are specialised in custom website design, SEO-friendly development, and high-performance web solutions. Get a fast, responsive, and mobile-optimised website to grow your business.</p>
          </div>
          <div className={styles.heroContainerSocial}>
          <a href="https://www.facebook.com/WDMel/"><i className="fab fa-facebook-f"></i></a>
          
          <a href="https://www.instagram.com/Web_Developer_Melbourne"><i className="fab fa-instagram"></i> </a> 
          <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
          </div>
      
        
      </div>

      <div className={styles.featureGrid}>
        <div className={styles.smallBox}>
          <div className={styles.box1}>
            <i className="fas fa-check-circle"></i>
            <h3>SEO-Optimised</h3>
            {/* <p>SEO-Optimized Websites.</p> */}
          </div>
          <div className={styles.box1}>
            <i className="fas fa-thumbs-up"></i>
            <h3>Custom Design</h3>
            {/* <p>Custom Web Development.</p> */}
          </div>
          <div className={styles.box1}>
            <i className="fas fa-heart"></i>
            <h3>Customer Care</h3>
            {/* <p>Fast, Secure & Mobile-Friendly.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
