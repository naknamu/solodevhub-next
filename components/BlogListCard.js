import { useRouter } from "next/router";
import styled from "styled-components";
const { DateTime } = require("luxon");

const BlogList = styled.li`
  background-color: var(--background-secondary);
  box-shadow: var(--shadow-3);
  border-radius: var(--radius-6);
  padding: 12px;
  cursor: pointer;

  :hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-5);
  }
`;

const BlogListWrapper = styled.div`
  display: grid;
  gap: 1rem;
`;

const BlogListTile = styled.div`
  font-size: var(--fs-4);
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }
`;

const BlogListDate = styled.div`
  font-size: var(--fs-5);
`;

const BlogListCard = ({ blogPost }) => {
  const router = useRouter();

  const handleClick = () => {
    // convert title to slug, remove question mark and convert space to dash '-'
    const url_title = blogPost.title
      .toLowerCase()
      .replace(/\?/g, "")
      .replace(/\s+/g, "-");

    router.push(
      {
        pathname: `/posts/${url_title}`,
        query: { postid: blogPost._id },
      },
      `/posts/${url_title}`
    );
  };

  return (
    <BlogList onClick={handleClick}>
      <BlogListWrapper>
        <BlogListTile>{blogPost.title}</BlogListTile>
        <BlogListDate>
          Published Date:{" "}
          {DateTime.fromJSDate(new Date(blogPost.publishedDate)).toLocaleString(
            DateTime.DATE_MED
          )}
        </BlogListDate>
      </BlogListWrapper>
    </BlogList>
  );
};

export default BlogListCard;
