import { getPostById } from "../api/posts";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../api/users";
import { PostType, UserType } from "./interface";

const ReactQuery = () => {
  const postId = 27;

  const {
    isLoading: isLoadingPost,
    error: postError,
    data: post,
  } = useQuery<PostType, Error>(["posts", postId], () => getPostById(postId));

  const userId = post?.userId;

  const {
    isLoading: isLoadingUser,
    data: user,
    error: userError,
  } = useQuery<UserType, Error>(
    ["user", userId],
    () => getUserById(userId as number),
    {
      enabled: !!userId,
    }
  );

  if (postError) return <div>Error: {postError.message}</div>;
  if (userError) return <div>Error: {userError.message}</div>;

  if (isLoadingPost || isLoadingUser) <div>Loading...</div>;

  return (
    <>
      <h1>React Query</h1>
      <p>{user?.name}</p>
    </>
  );
};

export default ReactQuery;
