import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { PostType } from "../../../client/src/components/interface";

export const postRouter = createTRPCRouter({
  getById: publicProcedure
    .input(
      z.object({
        postId: z.number(),
      })
    )
    .query(async ({ input: { postId } }): Promise<PostType> => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    }),
});
