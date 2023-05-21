import { Root } from "mdast";

export default function getMarkdownPlugin(callback: (tree: Root) => void) {
  return () => {
    return (tree: Root) => {
      callback(tree);
    };
  };
}
