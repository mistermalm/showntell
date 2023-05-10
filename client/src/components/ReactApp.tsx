/* eslint-disable @typescript-eslint/no-explicit-any */
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import { PostType, UserType } from "./interface";
import { useEffect, useState } from "react";

const ReactApp = () => {
  const postId = 27;

  const [post, setPost] = useState<PostType>();
  const [user, setUser] = useState<UserType>();
  const [postError, setPostError] = useState<Error>();
  const [userError, setUserError] = useState<Error>();

  useEffect(() => {
    const getPostById = async (postId: number) => {
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
    };

    getPostById(postId);
  }, [postId]);

  useEffect(() => {
    if (post?.userId) {
      const getUserById = async (userId: number) => {
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
      };
      getUserById(post?.userId);
    }
  }, [post?.userId]);

  if (postError) <div>Error: {postError.message}</div>;
  if (userError) <div>Error: {userError.message}</div>;

  if (user === undefined) return <>Loading...</>;

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <h1>Vite + React</h1>

      <p>{user?.name}</p>
    </>
  );
};

export default ReactApp;
