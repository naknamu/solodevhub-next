import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Topic from "@/components/Topic";
import config from "@/config/config";

export const getServerSideProps = async (context) => {

  const { slug } = context.query;

  return {
    props: {
      slug
    }
  }
}

const TagDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [tag, setTag] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchTagDetails = async () => {
      const apiUrl = config.apiUrl;
      const response = await fetch(`${apiUrl}/tags/${slug}`);
      const data = await response.json();

      setTag(data.tag);

      // Filter only published posts
      const published_blogPost = data.blogPosts.filter(
        (blogPost) => blogPost.published === true
      );
      setBlogPosts(published_blogPost);
    };
    fetchTagDetails();
  }, [slug]);

  return (
    <div className="tagDetail">
      <Topic topic={tag} blogPosts={blogPosts} topicName={"tag"} />
    </div>
  );
};

export default TagDetail;