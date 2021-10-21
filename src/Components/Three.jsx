import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Environment,OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Slider from "./MovieData/Slider"
import Movie from "./MovieData/Movie"
import axios from 'axios';
import { useQuery } from 'react-query';
function Three({movie,searchfield,setsearchfield,setmovie}) {
  const{isLoading,data}=useQuery("Super Heros",()=>{
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=84bd2ca964c1790070846809a1b4300b&language=en-US&page=1`)
   })
  

 
  return (
    <div onClick={()=>{if(searchfield){setsearchfield(false)};}}>
        <Canvas style={{width:"100%",height:"100vh",position:"absolute",top:"0px",left:"0px",zIndex:"-1"}}>
      <Suspense fallback={null}>
          < OrbitControls />
          <Environment
           background
           files={['bkg1_back.png', 'bkg1_front.png','bkg1_top.png', 'bkg1_bot.png','bkg1_right.png', 'bkg1_left.png']}
            path="/"
            preset={null}
            scene={undefined} // adds the ability to pass a custom THREE.Scene
             />
             <ambientLight />
        <pointLight position={[10, 10, 10]} />
             {movie?(<Movie data={movie}/>): !isLoading?(<Slider  data={data.data.results} setmovie={setmovie}/>):null}
        </Suspense>
    </Canvas>
    </div>
    )
}

export default React.memo(Three)
