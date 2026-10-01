import {groupLabel} from "../utils/cosmicUtils";
export default function SearchPanel({query,setQuery,filtered,selected,onSelect,open,onClose}){
 if(!open)return null;
 return <aside className="panel left-panel">
  <div className="panel-heading"><div><span className="eyebrow">COSMIC MAP</span><h1>Explore the<br/><em>loka hierarchy.</em></h1></div><button className="close-btn" onClick={onClose} aria-label="Close map">×</button></div>
  <p className="helper">Select a realm to focus it in the 3D scene. The vertical arrangement is a visualization of the textual hierarchy, not a modern physical scale.</p>
  <label className="search-box"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Satya, Vaikuṇṭha, Pātāla…" aria-label="Search lokas"/></label>
  <div className="realm-list" role="list">
   {filtered.length===0?<div className="empty">No realms match “{query}”.</div>:filtered.map(l=><button role="listitem" className={selected.id===l.id?"realm-row active":"realm-row"} key={l.id} onClick={()=>onSelect(l)}><span><b>{l.name}</b><small>{l.feature}</small></span><i>{groupLabel(l.group)}</i></button>)}
  </div>
 </aside>
}
