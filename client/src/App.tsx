import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/react-query";
import ReactApp from "./components/ReactApp";
import ReactQueryApp from "./components/ReactQueryApp";
import TRPCApp from "./components/TRPCApp";
import { trpc } from "./utils/trpc";

const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:2022",
    }),
  ],
});

// function App() {
//   return (
//     <div>
//       <ReactApp />
//     </div>
//   );
// }

// function App() {
//   return (
//     <QueryClientProvider client={reactQueryClient}>
//       <ReactQueryApp />
//     </QueryClientProvider>
//   );
// }

function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={reactQueryClient}>
      <QueryClientProvider client={reactQueryClient}>
        <TRPCApp />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
