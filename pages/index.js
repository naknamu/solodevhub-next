import Head from 'next/head'
import Hero from '@/components/Hero'
import { useRef } from "react";
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'

export default function Home() {
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
        <Main ref={childRef} />
      </div>
    </>
  )
}
