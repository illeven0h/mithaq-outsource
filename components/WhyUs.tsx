'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features=[
  {n:'01',t:'Human Operations at Core',d:'Technology enables, but people deliver. Every system we build keeps the human experience front and center for your team and your customers.'},
  {n:'02',t:'Infrastructure That Scales',d:'What works at 100 clients must work at 10,000. We architect operations built to grow with you without breaking.'},
  {n:'03',t:'Conversion-First Thinking',d:'Every touchpoint we design traces back to a measurable outcome. Beautiful means nothing without results behind it.'},
  {n:'04',t:'Total Transparency',d:"Clear reporting, honest communication, no smoke and mirrors. This is a long-term partnership built on trust always."},
]

export default function WhyUs(){
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-80px'})
  return (
    <section id="why" className="py-28 px-20 overflow-hidden" style={{background:'var(--bg2)'}}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-28 items-center">
        <div ref={ref}>
          <motion.div initial={{opacity:0,x:-36}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.8}}>
            <h2 className="font-black tracking-[-0.03em] text-[var(--ink)] mb-4" style={{fontSize:'clamp(2rem,3.8vw,3.4rem)',lineHeight:1.05}}>
              The Difference<br/>Is Deliberate
            </h2>
            <p className="text-[1.05rem] text-[var(--ink3)] leading-[1.75] mb-12">
              We don't take every client. We take the right ones then we go all in.
            </p>
          </motion.div>
          {features.map((f,i)=>(
            <motion.div key={f.n}
              initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.7,delay:.2+i*.1}}
              className="flex gap-6 py-6 border-b border-[var(--border)] first:border-t first:border-[var(--border)] cursor-none group">
              <div className="font-black text-[2.2rem] leading-none tracking-[-0.04em] min-w-[56px] transition-colors duration-300"
                style={{color:'rgba(22,24,28,0.1)'}}
                onMouseEnter={e=>(e.currentTarget.style.color='var(--teal)')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(22,24,28,0.1)')}>
                {f.n}
              </div>
              <div>
                <div className="text-[1rem] font-bold text-[var(--ink)] mb-1.5 tracking-[-0.01em]">{f.t}</div>
                <div className="text-[0.875rem] text-[var(--ink3)] leading-[1.65]">{f.d}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated panel */}
        <motion.div initial={{opacity:0,x:36}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.9,delay:.2}}
          className="relative h-[520px] flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 520" fill="none">
            {[['70','100','210','260','rgba(13,158,135,.15)','2'],['350','100','210','260','rgba(184,147,74,.12)','2.4'],
              ['70','420','210','260','rgba(13,158,135,.12)','1.8'],['350','420','210','260','rgba(184,147,74,.10)','2.2']].map(([x1,y1,x2,y2,c,dur],i)=>(
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1.5" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-16" dur={`${dur}s`} repeatCount="indefinite"/>
              </line>
            ))}
            <circle cx="210" cy="260" r="80" stroke="rgba(13,158,135,.06)" strokeWidth="1"/>
            <circle cx="210" cy="260" r="120" stroke="rgba(13,158,135,.04)" strokeWidth="1"/>
          </svg>

          {/* Center card */}
          <div className="relative z-10 rounded-3xl p-7 w-[280px]" style={{background:'#fff',border:'1px solid var(--border)',boxShadow:'0 8px 40px var(--shadow2)'}}>
            <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[var(--ink3)] mb-5">Operations Overview</div>
            {[['#0d9e87','Support Tickets','99.2%',99],['#b8934a','Dispatch Rate','97.8%',97],['#16181c','Client Score','4.9 ★',98]].map(([col,lbl,val,w])=>(
              <div key={lbl}>
                <div className="flex items-center justify-between py-2.5 border-b border-[var(--border)]">
                  <div className="flex items-center text-[0.85rem] font-medium text-[var(--ink2)]">
                    <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{background:col as string}}/>
                    {lbl}
                  </div>
                  <div className="text-[0.85rem] font-bold text-[var(--teal)]">{val}</div>
                </div>
                <div className="h-[3px] rounded mt-1 mb-1" style={{width:`${w}%`,background:'linear-gradient(90deg,var(--teal),var(--gold))'}}/>
              </div>
            ))}
          </div>

          {/* Floating nodes */}
          {[['🎧','top-14 left-6','0s'],['🚖','top-14 right-6','.7s'],['⚡','bottom-14 left-6','1.4s'],['📡','bottom-14 right-6','.4s']].map(([icon,pos,delay])=>(
            <div key={icon} className={`absolute ${pos} w-11 h-11 rounded-full flex items-center justify-center text-[1.1rem] z-10`}
              style={{background:'#fff',border:'1.5px solid var(--border2)',boxShadow:'0 4px 20px var(--shadow)',
                animation:`floatNode 4s ease-in-out ${delay} infinite`}}>
              {icon}
            </div>
          ))}
          <style>{`@keyframes floatNode{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
        </motion.div>
      </div>
    </section>
  )
}
