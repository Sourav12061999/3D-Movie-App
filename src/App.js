import Three from "./Components/Three";
import Header from "./Components/MovieData/Header";
import { useState } from "react";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
function App() {
  const [searchfield, setsearchfield] = useState(false);
  const [movie, setmovie] = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      <Three
        movie={movie}
        searchfield={searchfield}
        setsearchfield={setsearchfield}
      />
      <Header
        searchfield={searchfield}
        setsearchfield={setsearchfield}
        setmovie={setmovie}
      />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
