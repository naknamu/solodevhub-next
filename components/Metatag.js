import Head from "next/head";
import { useRouter } from "next/router";

const Metatag = ({ title }) => {
  const router = useRouter();
  const canonicalUrl = (`https://solodevhub.com/` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      <title>{`${title} | Solo Dev Hub`}</title>
    </Head>
  );
};

export default Metatag;
