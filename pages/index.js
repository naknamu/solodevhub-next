import Head from "next/head";
import Hero from "@/components/Hero";
import { useRef } from "react";
import Main from "@/components/Main";
import config from "@/config/config";
import { SWRConfig } from "swr";
import Metatag from "@/components/Metatag";

export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const res = await fetch(`${config.apiUrl}/posts/published`);
  const data = await res.json();
  return {
    props: {
      fallback: {
        blogPosts: data,
      },
    },
  };
}

export default function Home({ fallback }) {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const scrollToChild = () => {
    childRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Metatag title={"Insights, tutorials, and career advice for solo developers"} />
      <div className="home">
        <Hero ref={parentRef} scrollToChild={scrollToChild} />
        <SWRConfig value={{ fallback }}>
          <Main typeOfPost={'Latest'} ref={childRef} />
        </SWRConfig>
      </div>
    </>
  );
}
