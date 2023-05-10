import { PostType } from "../components/interface";

export const getPostsById = async (postId: number): Promise<PostType> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};
