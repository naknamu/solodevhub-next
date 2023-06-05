import Head from 'next/head'
import Hero from '@/components/Hero'
import { useRef } from "react";
import Main from '@/components/Main'
import config from "../config/config";
import { SWRConfig } from 'swr';

export async function getStaticProps () {
  // `getStaticProps` is executed on the server side.
  const res = await fetch(`${config.apiUrl}/posts/published`);
  const data = await res.json();
  return {
    props: {
      fallback: {
        'blogPosts': data
      }
    }
  }
}

export default function Home({ fallback }) {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const scrollToChild = () => {
    childRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Solo Dev Hub | Insights, tutorials, and career advice for solo developers</title>
        <meta name="description" content="Discover the world of solo software development with insights, tutorials, and career advice exclusively for aspiring solo developers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home">
        <Hero ref={parentRef} scrollToChild={scrollToChild} />
        <SWRConfig value={{ fallback }}>
          <Main ref={childRef} />
        </SWRConfig>
      </div>
    </>
  )
}
