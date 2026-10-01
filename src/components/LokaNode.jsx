import {Text} from "@react-three/drei";
import {themeColor} from "../utils/cosmicUtils";
export default function LokaNode({l,selected,onSelect}){
 const c=themeColor(l.theme), active=selected?.id===l.id;
 return <group position={[l.position.x,l.position.y,l.position.z]} onClick={(e)=>{e.stopPropagation();onSelect(l)}}>
   <mesh>
    <sphereGeometry args={[active?.23:.14,24,24]}/>
    <meshStandardMaterial color={c} emissive={c} emissiveIntensity={active?4.5:1.8} roughness={.25}/>
   </mesh>
   <mesh rotation={[Math.PI/2,0,0]}>
    <torusGeometry args={[active?.55:.34,.012,8,64]}/>
    <meshBasicMaterial color={c} transparent opacity={active?.85:.3}/>
   </mesh>
   <Text position={[.72,0,0]} fontSize={active?.24:.18} color={active?"#ffffff":"#b8c2d8"} anchorX="left" anchorY="middle" maxWidth={2.7}>{l.name}</Text>
 </group>
}
