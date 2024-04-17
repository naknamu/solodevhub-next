import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader() {
  return (
    <SkeletonTheme highlightColor="#0074d9">
      <p>
        <Skeleton count={10} />
      </p>
    </SkeletonTheme>
  );
}
