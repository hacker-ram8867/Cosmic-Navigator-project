import {getVerseForReference} from "../data/versesDatabase";
export default function DetailsPanel({selected,onTravel,traveling,open,onClose}){
 if(!open)return null;
 const verses=selected.sources.map(getVerseForReference).filter(Boolean);
 return <aside className="panel right-panel">
  <div className="panel-heading"><div><span className="eyebrow">{selected.group.toUpperCase()}</span><h2>{selected.name}</h2></div><button className="close-btn" onClick={onClose} aria-label="Close details">×</button></div>
  <div className="feature-chip">{selected.feature}</div>
  <p className="description">{selected.description}</p>
  <div className="meta-grid"><div><span>CATEGORY</span><b>{selected.category==="transcendental"?"Transcendental":"Material"}</b></div><div><span>MODEL POSITION</span><b>{selected.category==="transcendental"?"Separate region":`Level ${selected.level}`}</b></div></div>
  <section className="scripture"><div className="section-label">SCRIPTURAL REFERENCES</div>{selected.sources.map(s=><a key={s} href={getVerseForReference(s)?.url||"#"} target="_blank" rel="noreferrer">{s} ↗</a>)}</section>
  {verses.slice(0,1).map(v=><section className="verse-card" key={v.reference}><div className="section-label">{v.reference}</div>{v.sanskrit&&<div className="sanskrit" lang="sa">{v.sanskrit}</div>}{v.transliteration&&<div className="translit">{v.transliteration}</div>}<p>{v.summary}</p></section>)}
  <button className="travel-btn" onClick={()=>onTravel(selected)} disabled={traveling}>{traveling?"TRAVELLING…":"✦ TRAVEL HERE"}</button>
  <div className="model-note"><b>Interpretive model</b><span>3D coordinates, spacing, lighting and scale are application visualizations. They are not presented as modern astronomical distances.</span></div>
 </aside>
}
