import BlogPost from "@/components/BlogPost";
import Comment from "@/components/Comment";
import Metatag from "@/components/Metatag";
import { getPostBySlug } from "../api/post";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const post = await getPostBySlug(context.params.slug);
  if (!post) return { redirect: "/", permanent: false }; // redirect to main blog posts page if post doesn't exist, or any other page you want

  return {
    props: { post },
    revalidate: 60
  };
};

const BlogPostDetail = ({ post }) => {
  return (
    <>
      <Metatag title={post.title} />
      <div className="blogPostDetail">
        <BlogPost data={post} />
        <Comment postid={post._id} />
      </div>
    </>
  );
};

export default BlogPostDetail;
