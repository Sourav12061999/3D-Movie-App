import Three from "./Components/Three";
import Header from "./Components/MovieData/Header";
import Singlemovie from "./Components/MovieData/Singlemovie";
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
        setmovie={setmovie}
      />
      <Header
        searchfield={searchfield}
        setsearchfield={setsearchfield}
        setmovie={setmovie}
      />
      {movie ? <Singlemovie movie={movie} /> : null}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
