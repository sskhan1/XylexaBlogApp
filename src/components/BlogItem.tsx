import React from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchStoryDetails } from "../services/api";
import { BlogPost } from "../types";

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
    <div>
      <h2>{post?.title}</h2>
      <p>Author: {post?.by}</p>
      <a href={`/post/${id}`}>Read more</a>
    </div>
  );
})

export default BlogItem;
