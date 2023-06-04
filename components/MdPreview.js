import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";


const MarkdownPreview = ({ markdown }) => {

  const EditerMarkdown = dynamic(
    () =>
        import("@uiw/react-md-editor").then((mod) => {
        return mod.default.Markdown;
        }),
    { ssr: false }
  );

  return (  
    <div data-color-mode="light">
      <EditerMarkdown source={markdown} />
    </div>
  );
}

export default MarkdownPreview;