// Exciting.js
import React from "react";
import styles from "./Exciting.module.css";
import excitingData from "./excitingData";

const Exciting = () => {
  return (
    <section id="most_exciting" className={styles.mostExciting}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {excitingData.map((item, index) => (
            <div
              key={index}
              className={`${styles.mostExcitingCard} ${index % 2 === 0 ? styles.slideInFromBottom : styles.slideInFromTop}`}
            >
              <span className={`${styles.fas} ${item.icon}`}></span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mostExcitingTitle}>
        <h2>
          <span>W</span>hy Choose Us for Your Coffee Needs?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nihil mollitia ratione eum voluptates unde voluptatibus sapiente nostrum sequi ad!
        </p>
      </div>
    </section>
  );
};

export default Exciting;