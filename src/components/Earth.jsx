import {useFrame} from "@react-three/fiber";
import {useRef} from "react";
import * as THREE from "three";
export default function Earth({selected,onSelect}){
 const ref=useRef();
 useFrame((_,dt)=>{if(ref.current)ref.current.rotation.y+=dt*.045;});
 return <group position={[0,0,0]}>
  <mesh ref={ref} onClick={(e)=>{e.stopPropagation();onSelect()}}>
   <sphereGeometry args={[.72,64,64]}/>
   <meshStandardMaterial color="#287bb5" roughness={.72} metalness={.04}/>
  </mesh>
  <mesh scale={1.06}>
   <sphereGeometry args={[.72,48,48]}/>
   <meshBasicMaterial color="#58d9ff" transparent opacity={.1} side={THREE.BackSide} blending={THREE.AdditiveBlending}/>
  </mesh>
  <mesh rotation={[Math.PI/2,0,0]}>
   <torusGeometry args={[1.02,.008,8,96]}/>
   <meshBasicMaterial color="#4edcff" transparent opacity={selected?.id==="bhurloka"?.75:.2}/>
  </mesh>
 </group>
}
