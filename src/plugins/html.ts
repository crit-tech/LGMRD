import { Root } from "hast";

export default function getHtmlPlugin(callback: (tree: Root) => void) {
  return () => {
    return (tree: Root) => {
      callback(tree);
    };
  };
}
