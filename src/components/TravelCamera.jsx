import {useEffect,useRef} from "react";
import {useFrame,useThree} from "@react-three/fiber";
import * as THREE from "three";
export default function TravelCamera({target,active,onComplete,onProgress}){
 const {camera}=useThree();
 const start=useRef(null);
 useEffect(()=>{if(active&&target)start.current={pos:camera.position.clone(),look:new THREE.Vector3(target.x,target.y,target.z),t:0};},[active,target,camera]);
 useFrame((_,dt)=>{
  if(!active||!start.current||!target)return;
  const s=start.current;s.t=Math.min(1,s.t+dt/2.2);
  const e=s.t<.5?2*s.t*s.t:1-Math.pow(-2*s.t+2,2)/2;
  const direction=new THREE.Vector3(target.x,target.y,target.z);
  const destination=new THREE.Vector3(target.x*.35,target.y+1.15,6.8);
  const arc=Math.sin(Math.PI*e)*2.2;
  destination.x+=arc*.35;
  camera.position.lerpVectors(s.pos,destination,e);
  camera.lookAt(new THREE.Vector3().lerpVectors(s.look,direction,e));
  onProgress?.(e);
  if(s.t>=1){start.current=null;onComplete?.();}
 });
 return null;
}
