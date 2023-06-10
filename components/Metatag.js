import Head from "next/head";

const Metatag = ({ title }) => {
  return (
    <Head>
      <title>{`${title} | Solo Dev Hub`}</title>
    </Head>
  );
};

export default Metatag;
