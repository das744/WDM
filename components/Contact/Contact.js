
"use client";

import { useState } from "react";
import styles from "@/components/Contact/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Your Message sent successfully. We will back to you ASAP.");
        setFormData({ name: "", email: "", message: "" });
        setSuccessMessage("Your message has been sent successfully!");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to send your message. Please try again.");
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again later.");
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactDetails}>
        <ul>
          <li>
            <i className="fa fa-phone"></i>
            <p>+61 430 224 546</p>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <p>info@wdm.com.au</p>
          </li>
          <li>
            <i className="fa fa-map-marker"></i>
            <p>1270 Main Rd, Melbourne, Australia</p>
          </li>
        </ul>
        <div className={styles.socialIcons}>

        <a href="https://www.facebook.com/WDMel/"><i className="fab fa-facebook-f"></i></a>
          
        <a href="https://www.instagram.com/Web_Developer_Melbourne"><i className="fab fa-instagram"></i> </a> 
        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className={styles.contactFormContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2>
          Get a Custom Website from a Melbourne Web Developer Today!
          </h2>
          <input type="text" 
           name="name"
           placeholder="Your Name"
           value={formData.name}
           onChange={handleChange}
            />
          <input type="email" name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
           />
          <textarea name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
};

export default Contact;



// import styles from '@/components/Contact/Contact.module.css';

// const contactDetails = [
//   { icon: 'fa-phone', info: '+123 456 7890' },
//   { icon: 'fa-envelope', info: 'email@example.com' },
//   { icon: 'fa-map-marker', info: '123 Main Street, City, Australia' }
// ];

// const socialIcons = [
//   { icon: 'fa-facebook-f', link: 'https://facebook.com' },
//   { icon: 'fa-twitter', link: 'https://twitter.com' },
//   { icon: 'fa-instagram', link: 'https://instagram.com' },
//   { icon: 'fa-linkedin', link: 'https://linkedin.com' }
// ];

// const Contact = () => {
//   return (
//     <section className={styles.contactSection} id="contact">
//       <div className={styles.contactDetails}>
//         <ul>
//           {contactDetails.map((detail, index) => (
//             <li key={index}>
//               <i className={`fa ${detail.icon}`}></i>
//               <p>{detail.info}</p>
//             </li>
//           ))}
//         </ul>
//         <div className={styles.socialIcons}>
//           {socialIcons.map((social, index) => (
//             <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
//               <i className={`fab ${social.icon}`}></i>
//             </a>
//           ))}
//         </div>
//       </div>
//       <div className={styles.contactFormContainer}>
//         <form className={styles.contactForm}>
//           <h1>
//             <span>C</span>ontact <span>Us</span>
//           </h1>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea placeholder="Your Message" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
