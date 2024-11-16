

interface Story {
    by: string;
    descendants: number; 
    id: number; 
    kids?: number[]; 
    score: number; 
    time: number; 
    title: string; 
    type: string; 
    url?: string; 
  }
  
  export interface BlogPost {
    id: number;
    by: string;
    title: string;
    time: number;
    descendants: number;
    url?: string;
    text?: string; 
    score?: number; 
  }
  