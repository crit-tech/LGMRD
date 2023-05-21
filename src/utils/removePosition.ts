export default function removePosition<T>(tree: T): T {
  const treeCopy = JSON.parse(JSON.stringify(tree));
  // recursively remove all keys named "position"
  function removeIt(obj: any) {
    if (obj && typeof obj === "object") {
      delete obj.position;
      Object.values(obj).forEach((value) => {
        removeIt(value);
      });
    }
  }
  removeIt(treeCopy);
  return treeCopy;
}
