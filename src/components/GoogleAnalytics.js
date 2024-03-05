
import React from 'react';
import Head from 'next/head';

const GoogleAnalytics = () => (
  <Head>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-H174TDP3D9"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H174TDP3D9');
        `,
      }}
    ></script>
  </Head>
);

export default GoogleAnalytics;