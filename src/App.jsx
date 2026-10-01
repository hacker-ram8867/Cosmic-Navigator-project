import {useState} from "react";
import CosmicScene from "./components/CosmicScene";
import NavigationBar from "./components/NavigationBar";
import SearchPanel from "./components/SearchPanel";
import DetailsPanel from "./components/DetailsPanel";
import Controls from "./components/Controls";
import ErrorBoundary from "./components/ErrorBoundary";
import {useCosmicNavigation} from "./hooks/useCosmicNavigation";

export default function App(){
 const nav=useCosmicNavigation();
 const [mapOpen,setMapOpen]=useState(true);
 const [detailsOpen,setDetailsOpen]=useState(true);
 const selectAndFocus=(l)=>{nav.select(l);nav.beginTravel(l);setDetailsOpen(true)};
 const reset=()=>{nav.reset();setMapOpen(true);setDetailsOpen(true)};
 return <main className="app">
  <ErrorBoundary><CosmicScene selected={nav.selected} traveling={nav.traveling} onTravelComplete={nav.finishTravel} onTravelProgress={nav.setTravelProgress} onSelect={selectAndFocus}/></ErrorBoundary>
  <div className="scene-vignette"/>
  <NavigationBar selected={nav.selected} onReset={reset} mapOpen={mapOpen} onToggleMap={()=>setMapOpen(v=>!v)} onToggleDetails={()=>setDetailsOpen(v=>!v)}/>
  <div className="cosmic-badge"><span>14 MATERIAL LOKAS</span><i/> <span>3 TRANSCENDENTAL REALMS</span></div>
  <div className="transcendental-label"><span>TRANSCENDENTAL</span><small>separate from the material hierarchy</small></div>
  <SearchPanel query={nav.query} setQuery={nav.setQuery} filtered={nav.filtered} selected={nav.selected} onSelect={selectAndFocus} open={mapOpen} onClose={()=>setMapOpen(false)}/>
  <DetailsPanel selected={nav.selected} onTravel={nav.beginTravel} traveling={nav.traveling} open={detailsOpen} onClose={()=>setDetailsOpen(false)}/>
  <Controls traveling={nav.traveling} progress={nav.travelProgress} onReset={reset}/>
 </main>
}
