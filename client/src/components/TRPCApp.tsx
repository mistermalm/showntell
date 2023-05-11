import { trpc } from "../utils/trpc";

const TRPCApp = () => {
  const postId = 27;

  const {
    data: post,
    error: postError,
    isLoading: isLoadingPost,
  } = trpc.post.get.useQuery({
    postId,
  });

  const userId = post?.userId as number;

  const {
    data: user,
    error: userError,
    isLoading: isLoadingUser,
  } = trpc.user.get.useQuery({ userId }, { enabled: !!userId });

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
