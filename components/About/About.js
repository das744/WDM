import styles from "@/components/About/About.module.css";

const About = () => {
  const features = [
    "Google-Optimized Websites for Higher Rankings.",
    "Modern & Responsive Design.",
    "Lightning-Fast Page Speed.",
    "Custom Features & E-commerce Solutions.",
    "Count on us for consistent quality.",
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.leftSide}>
  
      </div>
      <div className={styles.rightSide}>
        <h2>
          <span>M</span>elbourne&rsquo;s Trusted Web Developer – Custom
          Solutions for Your Business
        </h2>
        <p>
        We offer a range of services designed to meet your specific needs. From small websites to large-scale projects, we provide the perfect solution for every type of business.
        </p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <i className="fas fa-check-circle"></i> {feature}
            </li>
          ))}
        </ul>
        <a href="#contact">
        <button className={styles.aboutBtn}>
        Contact Us <i className="fas fa-arrow-alt-circle-right"></i>
        </button>
        </a>
      </div>
    </section>
  );
};

export default About;
