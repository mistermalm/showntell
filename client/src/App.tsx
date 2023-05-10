import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactApp from "./components/ReactApp";

// React Query Client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactApp />
    </QueryClientProvider>
  );
}

export default App;
