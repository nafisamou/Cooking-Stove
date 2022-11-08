import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Programming Language`;
  }, [title]);
};

export default useTitle;
