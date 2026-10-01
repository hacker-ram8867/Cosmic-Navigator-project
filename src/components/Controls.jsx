export default function Controls({traveling,progress,onReset}){
 return <div className="bottom-controls">
  <div><span className="status-dot"/>{traveling?`Traveling · ${Math.round(progress*100)}%`:"Explore mode"}</div>
  <span>Drag orbit · Wheel / pinch zoom · Click a realm</span>
  <button onClick={onReset}>Return to Earth</button>
 </div>
}
