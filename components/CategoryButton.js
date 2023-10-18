// import { useRouter } from "next/router";
import Link from "next/link";

const CategoryButton = ({ category }) => {
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push(`/categories/${category.slug}/`);
  // };

  return (
    <button className="blog-category text-tiny">
      <Link href={`/categories/${category.slug}`}>
        {category.name}
      </Link>
    </button>
  );
};

export default CategoryButton;
