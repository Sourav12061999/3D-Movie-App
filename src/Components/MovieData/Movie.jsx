import React,{useRef} from 'react'
import { useTexture } from "@react-three/drei"
import { useFrame } from '@react-three/fiber';

function Movie({data}) {
  let url;
  if(data.poster_path){
    url=`https://image.tmdb.org/t/p/w500/${data.poster_path}`
  }else{
    url="not.jfif"
  }
    const[colorMap]=useTexture([url])
    console.log(data);
  const mesh=useRef();
  useFrame((state, delta) => {mesh.current.rotation.y += 0.005;})
    return (
        <mesh ref={mesh}  position={[0,1,-4]}>
      <boxGeometry args={[7, 5, 7]} />
      <meshStandardMaterial   map={colorMap}/> 
      
    </mesh>
    )
}

export default Movie
