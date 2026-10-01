import {Canvas,useThree} from "@react-three/fiber";
import {OrbitControls,Sparkles,Stars,Line} from "@react-three/drei";
import {useEffect,useMemo} from "react";
import Earth from "./Earth";
import LokaNode from "./LokaNode";
import TranscendentalRealm from "./TranscendentalRealm";
import TravelCamera from "./TravelCamera";
import {lokas} from "../data/lokas";

function SceneContent({selected,traveling,onTravelComplete,onTravelProgress,onSelect}){
 const {camera}=useThree();
 const material=useMemo(()=>lokas.filter(l=>l.category==="material"&&l.id!=="bhurloka"),[]);
 useEffect(()=>{camera.lookAt(0,0,0)},[camera]);
 return <>
  <color attach="background" args={["#02040c"]}/>
  <fog attach="fog" args={["#02040c",12,38]}/>
  <ambientLight intensity={.3}/>
  <pointLight position={[2,5,5]} intensity={5} color="#8f7dff"/>
  <pointLight position={[-4,-5,3]} intensity={2.5} color="#45dfff"/>
  <Stars radius={90} depth={55} count={4200} factor={2.1} saturation={.15} fade speed={.25}/>
  <Sparkles count={700} scale={[14,25,12]} size={1.15} speed={.18} color="#a7c7ff"/>
  <Sparkles count={180} scale={[8,8,8]} position={[0,1,-3]} size={1.8} speed={.12} color="#8d7cff"/>
  <Line points={material.map(l=>[0,l.position.y,0])} color="#7080b4" transparent opacity={.18} lineWidth={1}/>
  <Line points={[[-3.9,0,-1.8],[3.9,0,-1.8]]} color="#b8a7ff" transparent opacity={.18} lineWidth={1}/>
  <group>
   <Earth selected={selected} onSelect={()=>onSelect(lokas.find(l=>l.id==="bhurloka"))}/>
   {material.map(l=><LokaNode key={l.id} l={l} selected={selected} onSelect={onSelect}/>)}
  </group>
  <group position={[0,3.6,0]}>
   <mesh rotation={[Math.PI/2,0,0]}>
    <torusGeometry args={[4.4,.018,8,128]}/>
    <meshBasicMaterial color="#9e8bff" transparent opacity={.3}/>
   </mesh>
   {lokas.filter(l=>l.category==="transcendental").map((l,i)=><TranscendentalRealm key={l.id} l={l} index={i} selected={selected} onSelect={onSelect}/>)}
  </group>
  <TravelCamera target={selected?.position||{x:0,y:0,z:0}} active={traveling} onComplete={onTravelComplete} onProgress={onTravelProgress}/>
  <OrbitControls enabled={!traveling} enablePan={true} minDistance={3.2} maxDistance={24} minPolarAngle={.25} maxPolarAngle={Math.PI-.25} dampingFactor={.07} enableDamping/>
 </>
}
function WebGLFallback(){return <div className="webgl-fallback"><strong>3D rendering is unavailable.</strong><span>Please enable WebGL in your browser and reload the application.</span></div>}
export default function CosmicScene(props){
 return <div className="cosmic-canvas"><Canvas dpr={[1,1.6]} gl={{antialias:true,powerPreference:"high-performance"}} camera={{position:[0,1.2,8],fov:48}} fallback={<WebGLFallback/>} onCreated={({gl})=>{gl.setPixelRatio(Math.min(window.devicePixelRatio,1.6));}}><SceneContent {...props}/></Canvas></div>
}
