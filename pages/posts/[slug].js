import { useRouter } from "next/router";
import BlogPost from "@/components/BlogPost";
import Comment from "@/components/Comment";
import config from "@/config/config";

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const response = await fetch(`${config.apiUrl}/posts/${slug}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};

const BlogPostDetail = ({ post }) => {
  return (
    <div className="blogPostDetail">
      <BlogPost data={post} />
      <Comment postid={post._id} />
    </div>
  );
};

export default BlogPostDetail;
