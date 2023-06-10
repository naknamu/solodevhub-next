import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Discover the world of solo software development with insights, tutorials, and career advice exclusively for aspiring solo developers."
        />
        <meta
        name="keywords"
        content="software development, coding tutorials, career tips, programming advice, solo developer"
        />
        <meta name="author" content="Jodel Del Valle" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Insights, tutorials, and career advice for solo developers | Solo Dev Hub"
        />
        <meta
          property="og:description"
          content="Discover the world of solo software development with insights, tutorials, and career advice exclusively for aspiring solo developers."
        />

        <meta
          property="og:image"
          content="https://pub-9c57eec207bf46e8acf2f916d8ea29e7.r2.dev/solodevhub/logo-color.png"
        />
        <meta
          property="og:image"
          content="https://pub-9c57eec207bf46e8acf2f916d8ea29e7.r2.dev/solodevhub/logo_circle.png"
        />
        <meta property="og:image" content="%PUBLIC_URL%/logo512.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.solodevhub.com" />
        <meta property="og:site_name" content="Solo Dev Hub" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
