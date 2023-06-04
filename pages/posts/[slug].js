import { useRouter } from "next/router";
import BlogPost from "@/components/BlogPost";
// import Comment from "../components/Comment";

const BlogPostDetail = () => {
  const router = useRouter();
  const { postid, slug } = router.query;

  return (
    <div className="blogPostDetail">
      <BlogPost postid={postid} slug={slug} />
      {/* <Comment postid={postid} /> */}
    </div>
  );
};

export default BlogPostDetail;