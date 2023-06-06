import { useRouter } from "next/router";
import BlogPost from "@/components/BlogPost";
import Comment from "@/components/Comment";
import config from "@/config/config";


export const getServerSideProps = async (context) => {
  const { postid } = context.query;

  const response = await fetch(`${config.apiUrl}/posts/${postid}`);
  const data = await response.json();

  return {
    props: {
      post: data
    }
  }
}


const BlogPostDetail = ({ post }) => {
  const router = useRouter();
  const { postid } = router.query;

  return (
    <div className="blogPostDetail">
      <BlogPost data={post} />
      <Comment postid={postid} />
    </div>
  );
};

export default BlogPostDetail;