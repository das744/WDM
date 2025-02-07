
import '@/styles/globals.css';
import Hero from '@/components/Hero/Hero';
import ExcitingSection from '@/components/ExcitingSection/ExcitingSection';
import Service from "@/components/Service/Service";
import About from "@/components/About/About";
import Feature from "@/components/Feature/Feature";
import Testimonial from '@/components/Testimonial/Testimonial';
import AboutUs from '@/components/AboutUs/aboutUs';
import Contact from '@/components/Contact/Contact';
import Script from "next/script";

export const metadata = {
  title: "Web Developer in Melbourne -WDM | Custom Websites & SEO Optimisation",
  description: "Looking for an expert web developer in Melbourne? I create SEO-friendly, fast, and responsive websites using Next.js.",
  keywords: [
    "Web Developer in Melbourne",
    "SEO-Friendly Websites Melbourne",
    "Next.js Web Development",
    "Melbourne Website Designer",
    "Custom Website Development",
    "Website Designer in Melbourne",
    "Responsive Web Design Melbourne",
  ],
  openGraph: {
    title: "Web Developer in Melbourne | Custom Websites & SEO Optimisation",
    description: "Get high-performance, SEO-optimised websites in Melbourne. Expert in Next.js, React, and mobile-friendly web development.",
    url: "https://webdeveloperinmelbourne.com.au",
    siteName: "Web Developer in Melbourne",
    images: [
      {
        url: "https://webdeveloperinmelbourne.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Developer in Melbourne",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer in Melbourne",
    description: "Need a professional web developer in Melbourne? Get a fast, SEO-friendly website today.",
    images: ["https://webdeveloperinmelbourne.com.au/og-image.jpg"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Web Developer in Melbourne",
        "url": "https://webdeveloperinmelbourne.com.au",
        "author": {
          "@type": "Person",
          "name": "Ajanta",
        },
        "description": "SEO-friendly website development services in Melbourne. Next.js expert for fast, responsive, and optimised websites.",
        "image": "https://webdeveloperinmelbourne.com.au/og-image.jpg",
      },
      {
        "@type": "WebPage",
        "name": "Web Developer in Melbourne (WDM) | Custom Websites & SEO Optimisation",
        "url": "https://webdeveloperinmelbourne.com.au",
        "description": "Looking for an expert web developer in Melbourne? We create SEO-friendly, fast, and responsive websites using Next.js.",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://webdeveloperinmelbourne.com.au",
        },
        "datePublished": "2024-02-07",
        "dateModified": "2024-02-07",
        "inLanguage": "en",
      }
    ]
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Main Components */}
      <Hero />
      <ExcitingSection />
      <Feature />
      <About />
      <Service />
      <AboutUs />
      <Testimonial />
      <Contact />
    </>
  );
}
