import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactApp from "./components/ReactApp";

// TRPC Client

// React Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactApp />
      {/* <ReactQuery /> */}
    </QueryClientProvider>
  );
}

export default App;
