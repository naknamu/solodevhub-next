import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Topic from "@/components/Topic";
import config from "@/config/config";

const TagDetail = () => {
  const router = useRouter();
  const { topicID } = router.query;
  const [tag, setTag] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchTagDetails = async () => {
      const apiUrl = config.apiUrl;
      const response = await fetch(`${apiUrl}/tags/${topicID}`);
      const data = await response.json();

      setTag(data.tag);

      // Filter only published posts
      const published_blogPost = data.blogPosts.filter(
        (blogPost) => blogPost.published === true
      );
      setBlogPosts(published_blogPost);
    };
    fetchTagDetails();
  }, [topicID]);

  return (
    <div className="tagDetail">
      <Topic topic={tag} blogPosts={blogPosts} topicName={"tag"} />
    </div>
  );
};

export default TagDetail;