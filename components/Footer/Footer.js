import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h2>
           
             WDM
          </h2>
          <p>Crafting responsive websites with the latest technology to help businesses succeed online..</p>
          <div className={styles.share}>
          <a href="https://www.facebook.com/WDMel/"><i className="fab fa-facebook-f"></i></a>
          
          <a href="https://www.instagram.com/Web_Developer_Melbourne"><i className="fab fa-instagram"></i> </a> 
          <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className={styles.box}>
          <h3>quick links</h3>
          <a href="/" className={styles.link}>
            Home
          </a>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#services" className={styles.link}>
            Services
          </a>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </div>

        <div className={styles.box}>
          <h3>useful links</h3>
          <a href="#feature" className={styles.link}>
           features
          </a>
          <a href="#contact" className={styles.link}>
            ask questions
          </a>
          <a href="#contact" className={styles.link}>
            send feedback
          </a>
          // <a href="#" className={styles.link}>
          //   private policy
          // </a>
          // <a href="#" className={styles.link}>
          //   terms of use
          // </a>
        </div>

        <div className={styles.box}>
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input type="email" placeholder="enter your email" className={styles.email} />
            <input type="submit" value="subscribe" className={styles.btn} />
          </form>
        </div>
      </div>

      <div className={styles.credit}>
        created by <a>Primedesign.com.au</a> | all rights reserved!
      </div>
    </section>
  );
};

export default Footer;
