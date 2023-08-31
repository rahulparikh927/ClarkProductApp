import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootStack from "./src/navigators";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootStack />
    </QueryClientProvider>
  );
}

export default App;
