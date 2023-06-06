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
      post: data
    }
  }
}


const BlogPostDetail = ({ post }) => {

  // Destructured array to return JSON data
  const [ postDetail ] = post;

  return (
    <div className="blogPostDetail">
      <BlogPost data={postDetail} />
      <Comment postid={postDetail._id} />
    </div>
  );
};

export default BlogPostDetail;