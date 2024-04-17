import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import SkeletonLoader from "./SkeletonLoader";

const MarkdownPreview = ({ markdown }) => {
  const Preview = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false, loading: () => <SkeletonLoader /> }
  );

  return (
    <div data-color-mode="light">
      <Preview source={markdown} />
    </div>
  );
};

export default MarkdownPreview;
