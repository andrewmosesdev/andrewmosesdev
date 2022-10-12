import type { NextPage } from "next";
import Script from "next/script";
import { Header, Main, Footer } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RPPR99R932"
        strategy="afterInteractive"
      ></Script>
      <Script id="gtm" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RPPR99R932');`}
      </Script>
      <Main />
      <Footer />
    </>
  );
};

export default Home;
