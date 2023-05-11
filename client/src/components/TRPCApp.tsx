import { trpc } from "../utils/trpc";

const TRPCApp = () => {
  const postId = 27;

  const {
    data: post,
    error: postError,
    isLoading: isLoadingPost,
  } = trpc.post.getById.useQuery({
    postId,
  });

  const userId = post?.userId as number;

  const {
    data: user,
    error: userError,
    isLoading: isLoadingUser,
  } = trpc.user.getById.useQuery({ userId }, { enabled: !!userId });

  if (postError) return <div>Error: {postError.message}</div>;
  if (userError) return <div>Error: {userError.message}</div>;

  if (isLoadingPost || isLoadingUser) <div>Loading...</div>;

  return (
    <>
      <h1>TRPC</h1>
      <p>{user?.name}</p>
    </>
  );
};

export default TRPCApp;
