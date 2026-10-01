export const groupLabel=(group)=>group==="Higher Lokas"?"HIGHER":group==="Lower Lokas"?"LOWER":group==="Earth"?"EARTH":"TRANSCENDENTAL";
export const themeColor=(theme)=>({earth:"#4edcff",gold:"#ffd166",violet:"#a78bfa",blue:"#75a7ff",cyan:"#62e7ff",amber:"#ffc76b",teal:"#58e0c4",red:"#ff8f9d",crimson:"#ff6b86",rose:"#ff9b9b",orange:"#ffb067",green:"#83e0a0",indigo:"#9e9aff",magenta:"#e98cff",pearl:"#d9d4ff",lavender:"#bca9ff"}[theme]||"#9aa7ff");
export const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
