import React from "react";
import BlogItem from "./BlogItem";

interface BlogListProps {
  storyIds: number[];
}

const BlogList: React.FC<BlogListProps> = ({ storyIds }) => {
  return (
    <div>
      {storyIds.map((id) => (
        <BlogItem key={id} id={id} />
      ))}
    </div>
  );
};

export default BlogList;
