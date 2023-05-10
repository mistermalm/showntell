import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactApp from "./components/ReactApp";
import ReactQuery from "./components/ReactQuery";

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
