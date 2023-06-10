import Topic from "@/components/Topic";
import { getTagBySlug } from "../api/tag";

export const runtime = 'experimental-edge';

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const data = await getTagBySlug(context.params.slug);
  if (!data) return { redirect: "/tags", permanent: false };

  return {
    props: { data },
  };
};

const TagDetail = ({ data }) => {
  const { tag, blogPosts } = data;

  // Filter only published posts
  const published_blogPost = blogPosts.filter(
    (blogPost) => blogPost.published === true
  );

  return (
    <div className="tagDetail">
      <Topic topic={tag} blogPosts={published_blogPost} topicName={"tag"} />
    </div>
  );
};

export default TagDetail;
