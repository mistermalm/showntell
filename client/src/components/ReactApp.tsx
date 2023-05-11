import { PostType, UserType } from "./interface";
import { useCallback, useEffect, useState } from "react";

const ReactApp = () => {
  const postId = 27;

  const [post, setPost] = useState<PostType>();
  const [user, setUser] = useState<UserType>();
  const [postError, setPostError] = useState<Error>();
  const [userError, setUserError] = useState<Error>();

  const getPostById = useCallback(async (postId: number) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const jsonData = await response.json();
      setPost(jsonData);
    } catch (err) {
      const error = err as Error;
      setPostError(error);
    }
  }, []);

  const getUserById = useCallback(async (userId: number) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const jsonData = await response.json();
      setUser(jsonData);
    } catch (err) {
      const error = err as Error;
      setUserError(error);
    }
  }, []);

  useEffect(() => {
    getPostById(postId);
  }, [getPostById, postId]);

  useEffect(() => {
    post?.userId && getUserById(post?.userId);
  }, [getUserById, post?.userId]);

  if (postError) <div>Error: {postError.message}</div>;
  if (userError) <div>Error: {userError.message}</div>;

  if (user === undefined) return <>Loading...</>;

  return (
    <>
      <h1>React</h1>
      <p>{user?.name}</p>
    </>
  );
};

export default ReactApp;
