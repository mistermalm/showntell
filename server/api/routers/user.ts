import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { UserType } from "../../../client/src/components/interface";

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(async ({ input: { userId } }): Promise<UserType> => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json() as UserType;
    }),
});
