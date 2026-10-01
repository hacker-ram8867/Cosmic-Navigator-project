import {useMemo,useState} from "react";
import {lokas} from "../data/lokas";
export function useCosmicNavigation(){
 const earth=lokas.find(l=>l.id==="bhurloka")||lokas[0];
 const [selectedId,setSelectedId]=useState(earth.id);
 const [query,setQuery]=useState("");
 const [traveling,setTraveling]=useState(false);
 const [travelProgress,setTravelProgress]=useState(0);
 const selected=lokas.find(l=>l.id===selectedId)||earth;
 const filtered=useMemo(()=>{const q=query.trim().toLowerCase();if(!q)return lokas;return lokas.filter(l=>`${l.name} ${l.sanskritName} ${l.feature} ${l.group}`.toLowerCase().includes(q));},[query]);
 const select=(l)=>setSelectedId(l.id);
 const beginTravel=(l=selected)=>{setSelectedId(l.id);setTravelProgress(0);setTraveling(true);};
 const finishTravel=()=>{setTraveling(false);setTravelProgress(1);};
 const reset=()=>{setSelectedId(earth.id);setTraveling(false);setTravelProgress(0);};
 return {earth,selected,selectedId,query,setQuery,filtered,select,beginTravel,finishTravel,reset,traveling,travelProgress,setTravelProgress};
}
