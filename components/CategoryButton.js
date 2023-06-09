import { useRouter } from "next/router";

const CategoryButton = ({ category }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/categories/${category.slug}/`);
  };

  return (
    <button className="blog-category text-tiny" onClick={handleClick}>
      {category.name}
    </button>
  );
};

export default CategoryButton;
