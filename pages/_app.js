import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Montserrat, Inter } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <main className={mont.className}>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </main>
  );
}
