import BlogPostCard from "./BlogPostCard";
import { forwardRef } from "react";
import config from "../config/config";
import useSWR from "swr";

const Main = forwardRef((props, ref) => {
  const fetchPosts = async () => {
    const response = await fetch(`${config.apiUrl}/posts/published`);

    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }
    return response.json();
  };

  const { data, error } = useSWR("blogPosts", fetchPosts);

  // Render when data is not null
  if (!data) {
    return (
      <div className="container">
        <div>Fetching blog post...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="main" ref={ref}>
      <div className="container">
        <div className="blog">
          <h2 className="h2">Latest Blog Posts</h2>
          <div className="blogPosts-card">
            {data &&
              data.map((blogPost) => (
                <BlogPostCard blogPost={blogPost} key={blogPost._id} />
              ))}
          </div>
          {/* <div className="btn load-more">Load More</div> */}
        </div>
      </div>
    </div>
  );
});

export default Main;
