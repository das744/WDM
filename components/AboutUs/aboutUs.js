import styles from './aboutUs.module.css';

const AboutUs = () => {
  const images = [
    {
      src: '/images/web_developer_service_melbourne.jpg',
      alt: 'Image 1',
      className: styles.image1,
    },
    {
      src: '/images/web_developer_melbourne_img1.jpg',
      alt: 'Image 2',
      className: styles.image2,
    },
    {
      src: '/images/social_media_img_web_developer_melbourne.jpg',
      alt: 'Image 3',
      className: styles.image3,
    },
  ];

  return (
    <section className={styles.about_us}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          <span>W</span>ho We Are
        </h2>
        <p id="animated-paragraph">
        We are a dedicated web development team focused on building modern websites using the latest technologies. Our goal is to create websites that are easy to use, secure, and efficient. We prioritise data protection with secure databases and ensure that each project is optimsed for performance. Whether you're starting from scratch or updating an existing site, we provide reliable solutions to meet your needs.

       
        </p>
        <a href="#contact">
        <button className={styles.aboutusBtn}>Contact Us <i className="fas fa-arrow-alt-circle-right"></i></button>
        </a>
      </div>
      <div className={styles.aboutUsImages}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
