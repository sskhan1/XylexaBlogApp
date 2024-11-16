import React from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchStoryDetails } from "../services/api";
import { BlogPost } from "../types";
import "../styles/BlogItem.css"; // Import the CSS file

interface BlogItemProps {
  id: number;
}

const BlogItem: React.FC<BlogItemProps> = React.memo(({ id }) => {
  const { data: post, isLoading, error } = useFetch<BlogPost>(
    fetchStoryDetails(id)
  );

  if (isLoading) return <div>Loading post...</div>;
  if (error) return <div>Error loading post.</div>;

  return (
    <div className="blog-card">
      <h2 className="blog-title">{post?.title}</h2>
      <p className="blog-meta">Author: {post?.by}</p>
      <a href={`/post/${id}`} className="blog-link">
        Read more
      </a>
    </div>
  );
});

export default BlogItem;
