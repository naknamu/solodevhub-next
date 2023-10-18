import Topic from "@/components/Topic";
import { getCategoryBySlug } from "../api/category";
import Metatag from "@/components/Metatag";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const data = await getCategoryBySlug(context.params.slug);
  if (!data) return { redirect: "/categories", permanent: false };

  return {
    props: { data },
  };
};

const CategoryDetail = ({ data }) => {
  const { category, blogPosts } = data;

  // Filter only published posts
  const published_blogPost = blogPosts.filter(
    (blogPost) => blogPost.published === true
  );

  return (
    <>
      <Metatag title={category.name} />
      <div className="categoryDetail">
        <Topic
          topic={category}
          blogPosts={published_blogPost}
          topicName={"category"}
        />
      </div>
    </>
  );
};

export default CategoryDetail;
