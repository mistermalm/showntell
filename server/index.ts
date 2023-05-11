import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { appRouter } from "./api/root";

createHTTPServer({
  middleware: cors(),
  router: appRouter,
}).listen(2022);

console.log("Server listeing on port 2022");
