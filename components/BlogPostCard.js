import CategoryButton from "./CategoryButton";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useRouter } from "next/router";
import Image from "next/image";

const BlogPostCard = ({ blogPost }) => {
  const MAX_PREVIEW_LENGTH = 200; // maximum length of the preview content
  const router = useRouter();

  // extract the preview content from the full content
  const previewContent = blogPost.content.substring(0, MAX_PREVIEW_LENGTH);

  // Navigate to Blog Detail Page
  const handleClick = () => {
    // convert title to slug, remove question mark and convert space to dash '-'
    // const url_title = blogPost.title.toLowerCase().replace(/\?/g, '').replace(/\s+/g, '-');

    // router.push({
    //   pathname: `/posts/${blogPost.slug}`,
    //   query: { postid: blogPost._id}
    // }, `/posts/${blogPost.slug}`)

    router.push(`/posts/${blogPost.slug}`);
  };

  return (
    <div className="blogPost-card">
      <div className="blog-card-banner">
        <Image
          src={blogPost.image_url === undefined ? "#" : blogPost.image_url}
          alt="Blog Post Banner"
          className="blog-banner-img"
          onClick={() => handleClick()}
          width={400}
          height={400}
          responsive='true'
          priority
        />
      </div>

      <div className="blog-content-wrapper">
        <CategoryButton category={blogPost.category} />

        <h3 className="h3" onClick={() => handleClick()}>
          {blogPost.title}
        </h3>

        <p className="blog-text">{previewContent}....</p>

        <div className="wrapper">
          <div className="h4">{blogPost.author}</div>

          <div className="text-sm">
            <div>
              {formatDistanceToNow(new Date(blogPost.publishedDate), {
                addSuffix: true,
              })}
            </div>
            <span className="separator"></span>
            <div>{blogPost.minute_read} min read</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;