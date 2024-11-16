const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const fetchTopStories = () => `${BASE_URL}/topstories.json`;
export const fetchStoryDetails = (id: number) => `${BASE_URL}/item/${id}.json`;
