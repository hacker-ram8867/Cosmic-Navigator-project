import {Float,Text} from "@react-three/drei";
import {themeColor} from "../utils/cosmicUtils";
export default function TranscendentalRealm({l,index,selected,onSelect}){
 const c=themeColor(l.theme),active=selected?.id===l.id;
 const x=(index-1)*2.7;
 return <Float speed={1.1+index*.15} rotationIntensity={.12} floatIntensity={.28}>
  <group position={[x,0,-1.8]} onClick={(e)=>{e.stopPropagation();onSelect(l)}}>
   <mesh>
    <icosahedronGeometry args={[active?.62:.48,2]}/>
    <meshStandardMaterial color={c} emissive={c} emissiveIntensity={active?3.5:1.8} metalness={.2} roughness={.3}/>
   </mesh>
   <mesh scale={1.35}>
    <sphereGeometry args={[.48,32,32]}/>
    <meshBasicMaterial color={c} transparent opacity={.08} depthWrite={false}/>
   </mesh>
   <Text position={[0,-.82,0]} fontSize={.18} color={active?"#fff":"#d8d1ff"} anchorX="center">{l.name}</Text>
  </group>
 </Float>
}
