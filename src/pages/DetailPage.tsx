import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchStoryDetails } from "../services/api";
import { BlogPost } from "../types";
import "../styles/DetailPage.css";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();  // Use navigate hook for redirecting
  const { data: post, isLoading, error } = useFetch<BlogPost>(
    fetchStoryDetails(Number(id))
  );

  if (isLoading) return <div>Loading post details...</div>;
  if (error) return <div>Error loading post details.</div>;

  const formatTime = (timestamp: number | undefined): string => {
    if (!timestamp) return "No content available.";
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    navigate("/"); 
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">{post?.title}</h1>
        <p className="meta">
          <strong>By:</strong> {post?.by} | <strong>Score:</strong> {post?.score} |{" "}
          <strong>Comments:</strong> {post?.descendants}
        </p>
        <p className="text">Published: {formatTime(post?.time)}</p>
        {post?.url && (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Read Full Story
          </a>
        )}
        <div className="footer">
          <a href="/" className="back-link">
            Back to Home
          </a>
          <a href="/" className="logout-link" onClick={handleLogout}>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
