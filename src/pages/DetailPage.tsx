import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchStoryDetails } from "../services/api";
import { BlogPost } from "../types";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, error } = useFetch<BlogPost>(
    fetchStoryDetails(Number(id))
  );

  console.log(post,"checking");

  if (isLoading) return <div>Loading post details...</div>;
  if (error) return <div>Error loading post details.</div>;

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.by}</p>
      <p>{post?.text || "No content available."}</p>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default DetailPage;
