/* eslint-disable @typescript-eslint/no-explicit-any */
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import { useQuery } from "react-query";
import { getPostsById } from "../api/posts";
import { getUserById } from "../api/users";

const ReactQuery = () => {
  const postId = 27;

  const {
    isLoading,
    error,
    data: post,
  } = useQuery<any, Error>(["posts", postId], () => getPostsById(postId));

  const userId = post?.userId;

  const { isIdle, data: user } = useQuery(
    ["user", userId],
    () => getUserById(userId),
    {
      enabled: !!userId,
    }
  );

  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
