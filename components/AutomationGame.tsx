"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

type Item={id:number,x:number,y:number,type:"approve"|"reject"|"retry",speed:number};

export default function AutomationGame(){
  const [items,setItems]=useState<Item[]>([]);
  const [score,setScore]=useState(0);
  const [lives,setLives]=useState(3);
  const [running,setRunning]=useState(false);
  const nextId=useRef(1);

  useEffect(()=>{
    if(!running || lives<=0) return;
    const spawn=setInterval(()=>{
      const types:["approve","reject","retry"]=["approve","reject","retry"];
      setItems(v=>[...v,{id:nextId.current++,x:10+Math.random()*80,y:0,type:types[Math.floor(Math.random()*3)],speed:1.2+Math.random()*1.3}]);
    },900);
    const tick=setInterval(()=>{
      setItems(v=>{
        const escaped=v.filter(i=>i.y>88);
        if(escaped.length){
          setLives(l=>Math.max(0,l-escaped.length));
        }
        return v.filter(i=>i.y<=88).map(i=>({...i,y:i.y+i.speed}));
      });
    },50);
    return()=>{clearInterval(spawn);clearInterval(tick)};
  },[running,lives]);

  useEffect(()=>{if(lives<=0)setRunning(false)},[lives]);

  const route=(id:number,action:"approve"|"reject"|"retry")=>{
    setItems(v=>{
      const target=v.find(i=>i.id===id);
      if(!target) return v;
      if(target.type===action) setScore(s=>s+100);
      else setLives(l=>Math.max(0,l-1));
      return v.filter(i=>i.id!==id);
    })
  };

  const reset=()=>{setItems([]);setScore(0);setLives(3);setRunning(true)};

  return <div className="game-shell">
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="kicker">Mini game // Automation Defender</div>
        <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Route the records before they break production.</h3>
      </div>
      <button onClick={reset} className="rounded-xl border border-white/10 bg-white/[.04] p-3 text-slate-300 hover:text-white"><RotateCcw size={18}/></button>
    </div>
    <div className="mt-5 flex flex-wrap gap-3 text-xs">
      <span className="chip">SCORE {score}</span><span className="chip">LIVES {lives}</span>
      {!running && lives>0 && <button onClick={()=>setRunning(true)} className="chip cursor-pointer border-cyan-300/30 text-cyan-200">START</button>}
      {!running && lives<=0 && <span className="chip text-rose-300">SYSTEM FAILURE 😵</span>}
    </div>
    <div className="relative mt-5 h-[390px] overflow-hidden rounded-2xl border border-white/10 bg-black/35">
      <div className="absolute inset-0 game-grid"/>
      {items.map(i=><motion.div key={i.id} className="absolute -translate-x-1/2" style={{left:`${i.x}%`,top:`${i.y}%`}}>
        <button onClick={()=>route(i.id,i.type)} className="record">
          <div className="text-[10px] uppercase tracking-[.12em] text-slate-500">record</div>
          <div className="mt-1 text-xs font-semibold text-white">{i.type.toUpperCase()}</div>
        </button>
      </motion.div>)}
      <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2">
        {(["approve","reject","retry"] as const).map(a=><button key={a} onClick={()=>{
          const nearest=[...items].sort((x,y)=>y.y-x.y)[0]; if(nearest) route(nearest.id,a);
        }} className="route-btn">{a.toUpperCase()}</button>)}
      </div>
    </div>
    <p className="mt-3 text-xs leading-5 text-slate-500">Tip: click the matching route button for the lowest record. Completely fictional demo — no client data used.</p>
  </div>
}
