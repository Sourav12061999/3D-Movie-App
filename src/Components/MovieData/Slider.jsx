import React,{useState,useRef} from 'react'
import { useTexture } from "@react-three/drei"
import { useFrame } from '@react-three/fiber';
function Slider({data}) {
  const[count,setcount]=useState(0);
  const[colorMap]=useTexture([`https://image.tmdb.org/t/p/w500/${data[count].poster_path}`])
  const mesh=useRef();
  function TextureChange(){
    if(count<data.length-1){
      setcount(count+1);
    }else{
      setcount(0); 
    }
  }
  let timer=0
  useFrame((state, delta) => {mesh.current.rotation.y += 0.005;timer++;if(timer===400){TextureChange();timer=0;}})
    return (
        <mesh ref={mesh} onClick={()=>{TextureChange()}} position={[0,1,-4]}>
      <boxGeometry args={[7, 5, 7]} />
      <meshStandardMaterial   map={colorMap}/>
    </mesh>
    )
}

export default React.memo(Slider)
