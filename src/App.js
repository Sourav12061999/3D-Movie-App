import Three from "./Components/Three";
import Header from "./Components/MovieData/Header";
import { useState } from "react";
function App() {
  const [searchfield,setsearchfield]=useState(false);
  const [movie,setmovie]=useState(null);
  return (
    <>
      <Three movie={movie} searchfield={searchfield} setsearchfield={setsearchfield}/>
      <Header searchfield={searchfield} setsearchfield={setsearchfield} setmovie={setmovie}/>
    </>
  );
}

export default App;
