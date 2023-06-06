import { useRouter } from "next/router";
import styled from "styled-components";

const TopicListCard = styled.div`
  background-color: var(--background-secondary);
  box-shadow: var(--shadow-3);
  border-radius: var(--radius-6);
  padding: 12px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-5);
    text-decoration: underline;
  }
`;

const TopicList = ({ topic, topicLists }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${topicLists}/${topic.slug}`);
  };

  return <TopicListCard onClick={handleClick}>{topic.name}</TopicListCard>;
};

export default TopicList;
