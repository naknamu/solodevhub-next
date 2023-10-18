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

const Posts = ({ fallback }) => {
  return (
    <>
      <Metatag
        title={"Posts"}
      />
      <SWRConfig value={{ fallback }}>
        <Main typeOfPost={`All`} ref={null} />
      </SWRConfig>
    </>
  );
};

export default Posts;
