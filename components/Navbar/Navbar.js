"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false); // Close sidebar after clicking
    }
  };

  return (
    <>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <div className={styles.leftSide}>
          <i className="fas fa-envelope"></i> info@wdm.com.au
          <i className="fas fa-phone"></i> +61 430 224 546
        </div>
        <div className={styles.rightSideSocial}>
        <a href="https://www.facebook.com/WDMel/"><i className="fab fa-facebook-f"></i></a>
          
          <a href="https://www.instagram.com/Web_Developer_Melbourne"><i className="fab fa-instagram"></i> </a> 
          <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo}> WDM
        {/* <Image 
          src="/images/logo.png" 
          alt="Site Logo" 
          width={150} 
          height={50} 
        /> */}
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("services");
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <a href="#contact"><button className={styles.quote}> Get Quote </button></a>

        {/* Menu Icon for Mobile */}
        <div className={styles.menuIcon} onClick={openSidebar}>
          <i className="fa fa-bars"></i>
        </div>
      </nav>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
      >
        <i className={`fa fa-times ${styles.closeBtn}`} onClick={closeSidebar}></i>
        <ul className={styles.sidebarLinks}>
        <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("services");
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
