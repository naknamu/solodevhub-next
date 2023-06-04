import { useRouter } from "next/router";

const CategoryButton = ({ category }) => {
  const router = useRouter();

  const handleClick = () => {
    const urlRegex = /\s/g;
    const url_title = category.name.toLowerCase().replace(urlRegex, "-");

    router.push(`/categories/${category._id}/what-is-${url_title}`);
  };

  return (
    <button className="blog-category text-tiny" onClick={handleClick}>
      {category.name}
    </button>
  );
};

export default CategoryButton;