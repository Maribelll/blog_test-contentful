import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/kuq4bzj.css" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Broad Fit Financial" />
          <meta
            property="og:title"
            content="Broad Fit Financial - Health &amp; Wellness Equipment Financing"
          />
          <meta
            property="og:description"
            content="Broad Fit Financial provides equipment financing for businesses of any size looking to acquire new equipment."
          />
          <meta property="og:url" content="https://broadfitfinancial.com" />
          <meta property="og:locale" content="en_EN" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1665654292/Board-fit-financial/og_image_rufxbu.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="637" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
            }}
          />
        </body>
      </Html>
    );
  }
}
