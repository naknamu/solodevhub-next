import BlogPost from "@/components/BlogPost";
import Comment from "@/components/Comment";
import { getPostBySlug } from "../api/post";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps = async (context) => {
  const post = await getPostBySlug(context.params.slug)
  if(!post) return { redirect: '/', permanent: false } // redirect to main blog posts page if post doesn't exist, or any other page you want

  return {
    props: { post }
  }
}

const BlogPostDetail = ({ post }) => {
  return (
    <div className="blogPostDetail">
      <BlogPost data={post} />
      <Comment postid={post._id} />
    </div>
  );
};

export default BlogPostDetail;
