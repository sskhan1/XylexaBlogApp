

interface Story {
    by: string; // Author of the story
    descendants: number; // Number of comments or descendants
    id: number; // Unique identifier of the story
    kids?: number[]; // Array of comment IDs, optional as it may not always exist
    score: number; // Score of the story
    time: number; // Unix timestamp of when the story was created
    title: string; // Title of the story
    type: string; // Type of the item, e.g., "story"
    url?: string; // URL of the story, optional as it may not always exist
  }
  
  export interface BlogPost {
    id: number;
    by: string;
    title: string;
    time: number;
    descendants: number;
    url?: string;
    text?: string; // Full content for the detail page
  }
  