/* eslint-disable @typescript-eslint/no-explicit-any */
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import { useQuery } from "react-query";
import { getPostsById } from "../api/posts";
import { getUserById } from "../api/users";
import { PostType, UserType } from "./interface";

const ReactQuery = () => {
  const postId = 27;

  const {
    isLoading,
    error: postError,
    data: post,
  } = useQuery<PostType, Error>(["posts", postId], () => getPostsById(postId));

  const userId = post?.userId;

  const {
    isIdle,
    data: user,
    error: userError,
  } = useQuery<UserType, Error>(["user", userId], () => getUserById(userId), {
    enabled: !!userId,
  });

  if (postError) return <div>Error: {postError.message}</div>;
  if (userError) return <div>Error: {userError.message}</div>;

  if (isLoading || isIdle) <div>Loading...</div>;

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

export default ReactQuery;
