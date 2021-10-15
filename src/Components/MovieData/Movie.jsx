import React,{useRef} from 'react'
import { useTexture } from "@react-three/drei"
import { useFrame } from '@react-three/fiber';

function Movie({data}) {
    const[colorMap]=useTexture([`https://image.tmdb.org/t/p/w500/${data.poster_path}`])
        const [colorMap2]=useTexture(["not.jfif"]);
    
  const mesh=useRef();
  useFrame((state, delta) => {mesh.current.rotation.y += 0.005;})
    return (
        <mesh ref={mesh}  position={[0,1,-4]}>
      <boxGeometry args={[7, 5, 7]} />
      {data.poster_path?(<meshStandardMaterial   map={colorMap}/>):(<meshStandardMaterial   map={colorMap2}/>) }
      
    </mesh>
    )
}

export default Movie
