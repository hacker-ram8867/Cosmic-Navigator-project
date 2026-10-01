export default function NavigationBar({selected,onReset,onToggleMap,mapOpen,onToggleDetails}){
 return <header className="topbar">
  <button className="brand-button" onClick={onReset} aria-label="Reset journey to Earth"><span className="brand-mark">✦</span><span><strong>Cosmic Navigator</strong><small>3D VEDIC COSMOLOGY ATLAS</small></span></button>
  <div className="top-location"><span>CURRENT LOCATION</span><b>{selected.name}</b></div>
  <div className="top-actions"><button onClick={onToggleMap} aria-pressed={mapOpen}>Cosmic Map</button><button onClick={onToggleDetails}>Details</button><button onClick={onReset}>Reset</button></div>
 </header>
}
