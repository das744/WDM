import React from "react";
import styles from "@/components/Feature/Feature.module.css";
import { featuresData } from "@/components/Feature/featureData";
import {infoPage} from "@/app/InfoPage/page"
import Link from "next/link";

const Feature = () => {
  return (
    <section id="feature" className={styles.featureSection}>
      <h2 className={styles.heading}>
      <span>M</span>elbourne&rsquo;s Trusted Web Developer
      </h2>
      <p className={styles.description}>
      What Makes My Web Development Services Stand Out?
      </p>
      <div className={styles.featureGridContainer}>
        {featuresData.map((feature) => (
          <div key={feature.id} className={styles.gridItem}>
            <div className={styles.iconContainer}>
              <i className={`${feature.icon} ${styles.icon}`}></i>
            </div>
            <div className={styles.content}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link href="#contact">
              <button className={styles.featureBtn}>{feature.buttonText} <i className="fas fa-arrow-alt-circle-right"></i></button>
              </Link>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
