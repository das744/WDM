
'use client'
import Head from 'next/head';
import Script from "next/script";
import Navbar from '@/components/Navbar/Navbar'; 
import Footer from '@/components/Footer/Footer'; 

import { useEffect } from "react";

export default function Layout({ children }) {

  return (
    <>
      {/* Document structure with required HTML tags */}
      <html lang="en">
        <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
         

       {/* Google Analytics Script */}
       <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />


          {/* Structured Data for SEO */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "webdeveloperinmelbourne",
                  "url": "https://webdeveloperinmelbourne.com.au"
                })
              }}
          />


        </head>

        <body>
          <Navbar /> 
          <main>{children}</main> 
          <Footer/> 
        </body>
      </html>
    </>
  );
}
