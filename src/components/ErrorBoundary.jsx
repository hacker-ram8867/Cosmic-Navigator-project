import {Component} from "react";
export default class ErrorBoundary extends Component{
 constructor(props){super(props);this.state={hasError:false,error:null};}
 static getDerivedStateFromError(error){return {hasError:true,error};}
 componentDidCatch(error,info){console.error("Cosmic Navigator runtime error",error,info);}
 render(){
  if(!this.state.hasError)return this.props.children;
  return <div className="runtime-fallback"><div className="runtime-card"><span className="eyebrow">COSMIC NAVIGATOR</span><h2>3D scene could not start</h2><p>The application shell is running, but the WebGL scene encountered a browser/runtime error.</p><details><summary>Technical details</summary><pre>{String(this.state.error?.message||this.state.error||"Unknown error")}</pre></details><button onClick={()=>window.location.reload()}>Reload 3D Scene</button></div></div>;
 }
}
