import { useState, useEffect, useCallback, useMemo } from "react";
import debounce from "lodash.debounce";

export const useInfiniteScroll = (storyIds: number[], itemsPerPage: number) => {
  const [visibleStories, setVisibleStories] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  const newStories = useMemo(() => {
    return storyIds.slice(0, itemsPerPage * page);
  }, [storyIds, itemsPerPage, page]);

  const handleScroll = useCallback(
    debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 200),
    []
  );

  useEffect(() => {
    setVisibleStories(newStories);
  }, [newStories]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { visibleStories, page };
};
