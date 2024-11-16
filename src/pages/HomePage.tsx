import React, { useMemo } from "react";
import BlogList from "../components/BlogList";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorMessage from "../components/ErrorMessage";
import { useFetch } from "../hooks/useFetch";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { fetchTopStories } from "../services/api";
import "../styles/HomePage.css"; 

const HomePage: React.FC = () => {
  const { data: storyIds, isLoading, error } = useFetch<number[]>(fetchTopStories());

  const { visibleStories, page } = useInfiniteScroll(storyIds || [], 10);

  const renderBlogList = useMemo(() => {
    if (isLoading) return <LoadingIndicator />;
    if (error) return <ErrorMessage error={error} />;
    return <BlogList storyIds={visibleStories} />;
  }, [isLoading, error, visibleStories]);
  
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Blog Posts</h1>
      </header>
      <main className="homepage-content">
        {renderBlogList}
        {page * 10 < (storyIds?.length || 0) && <LoadingIndicator />}
      </main>
    </div>
  );
};

export default HomePage;
