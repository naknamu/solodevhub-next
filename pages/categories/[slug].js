import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

const CategoryDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [category, setCategory] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      const apiUrl = config.apiUrl;
      const response = await fetch(`${apiUrl}/categories/${slug}`);
      const data = await response.json();

      setCategory(data.category);

      // Filter only published posts
      const published_blogPost = data.blogPosts.filter(
        (blogPost) => blogPost.published === true
      );
      setBlogPosts(published_blogPost);
    };
    fetchCategoryDetails();
  }, [slug]);

  return (
    <div className="categoryDetail">
      <Topic topic={category} blogPosts={blogPosts} topicName={"category"} />
    </div>
  );
};

export default CategoryDetail;