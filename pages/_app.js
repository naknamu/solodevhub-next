import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const mont = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-YNVGXK4VGH"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "G-YNVGXK4VGH");
        `}
      </Script>
      <main className={mont.className}>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </main>
    </>
  );
}
