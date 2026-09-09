import { useState } from "react";
type Card={id:string;x:number;y:number;text:string;};
export default function App(){
  const [cards,setCards]=useState<Card[]>([{id:"1",x:40,y:40,text:"// hello vibe"}]);
  function add(){ setCards([...cards,{id:crypto.randomUUID(),x:Math.random()*400,y:Math.random()*300,text:"// new snippet"}]); }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center gap-2">
        <h1 className="font-light">code-canvas-board</h1>
        <button onClick={add} className="ml-auto rounded-full bg-[#1a1a1a] px-4 py-1.5 text-sm text-white">Add card</button>
      </div>
      <div className="relative mx-auto max-w-5xl h-[70vh] rounded-2xl border border-[#ebe7e0] bg-white overflow-hidden">
        {cards.map(c=>(
          <textarea key={c.id} value={c.text} onChange={e=>setCards(cards.map(x=>x.id===c.id?{...x,text:e.target.value}:x))} style={{left:c.x,top:c.y}} className="absolute h-32 w-48 rounded-xl border border-[#ebe7e0] bg-[#fdfcfa] p-2 text-xs" />
        ))}
      </div>
    </main>
  );
}
