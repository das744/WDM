import React from "react";
import styles from "@/components/Testimonial/Testimonial.module.css";

const testimonials = [
  {
    id: 1,
    quote: "A Dream Come True",
    text: "This agency transformed our online presence. Our traffic and leads have doubled!",
    author: "Alan.",
    imgSrc: "", 
  },
  {
    id: 2,
    quote: "Professional and Creative",
    text: "Professional, effective, and truly knowledgeable in Website Designing, Developing and Deploying.",
    author: "Danial.",
    imgSrc: "", 
  },
  {
    id: 3,
    quote: "Capturing the Essence",
    text: "They managed to capture the essence of my brand in every shot. The Services are now proudly displayed on my website!",
    author: "Kelly.",
    imgSrc: "", 
  },
];

const Testimonial = () => {
  return (
    <section id={styles.testimonialSection}>
      <h2>
        <span>W</span>hat Our Clients Say
      </h2>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialWrapper}>
          {testimonials.map((testimonial) => (
            <div className={styles.testimonialBox} key={testimonial.id}>
              <i className="fas fa-quote-left"></i>
              <h3>"{testimonial.quote}"</h3>
              <p>{testimonial.text}</p>
              <div className={styles.imgDiv}>
                {/* <img src={testimonial.imgSrc} alt={testimonial.author} /> */}
                <h4>– {testimonial.author}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
