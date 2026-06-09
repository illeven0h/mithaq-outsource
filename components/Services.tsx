'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {icon:'🎧',name:'Customer Support',desc:'24/7 multichannel support operations chat, email, voice. Human-centered service that builds loyalty, not just tickets closed.'},
  {icon:'🚖',name:'Taxi Dispatching',desc:'Intelligent fleet coordination and real-time dispatching. We manage your drivers, routes, and passengers so you can focus on growth.'},
  {icon:'⚡',name:'Web Development',desc:'Conversion-engineered digital experiences. Modern stacks, blazing performance, and interfaces your users will remember.'},
  {icon:'✦',name:'Graphic Design',desc:'Visual identities that speak before a word is read. Print, digital, motion crafted with precision and intentional beauty.'},
  {icon:'📡',name:'Social Media Management',desc:'Audience-first content strategy backed by data. We grow real communities that convert into real revenue.'},
  {icon:'◈',name:'Brand Strategy',desc:"Positioning that builds category leaders. We craft the story, narrative, and market architecture your brand needs to own its space."},
]

function Card({s,i}:{s:typeof services[0];i:number}){
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-50px'})
  return (
    <motion.div ref={ref}
      initial={{opacity:0,y:44}} animate={inView?{opacity:1,y:0}:{}}
      transition={{duration:.8,delay:i*.06,ease:[0.23,1,0.32,1]}}
      className="group rounded-[20px] p-9 relative overflow-hidden cursor-none transition-all duration-[450ms]"
      style={{background:'#fff',border:'1px solid var(--border)',boxShadow:'0 2px 16px var(--shadow)'}}
      whileHover={{y:-6,boxShadow:'0 20px 48px var(--shadow2)',borderColor:'rgba(13,158,135,0.2)'}}>
      {/* bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[400ms]"
        style={{background:'linear-gradient(90deg,var(--teal),var(--gold))'}}/>
      <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[1.5rem] mb-6 transition-all duration-300 group-hover:scale-105"
        style={{background:'var(--teal-pale)'}}>
        {s.icon}
      </div>
      <h3 className="text-[1.1rem] font-bold text-[var(--ink)] mb-2.5 tracking-[-0.01em]">{s.name}</h3>
      <p className="text-[0.875rem] text-[var(--ink3)] leading-[1.65]">{s.desc}</p>
    </motion.div>
  )
}

export default function Services(){
  const hRef=useRef(null)
  const hIn=useInView(hRef,{once:true})
  return (
    <section id="services" className="py-28 px-20 overflow-hidden" style={{background:'var(--bg)'}}>
      <div className="max-w-[1200px] mx-auto">
        <div ref={hRef} className="grid grid-cols-2 gap-16 items-end mb-16">
          <motion.div initial={{opacity:0,x:-36}} animate={hIn?{opacity:1,x:0}:{}} transition={{duration:.8,ease:[0.23,1,0.32,1]}}>
            <h2 className="font-black tracking-[-0.03em] text-[var(--ink)]" style={{fontSize:'clamp(2rem,3.8vw,3.4rem)',lineHeight:1.05}}>
              Everything Your Business<br/>Needs, Under One Roof
            </h2>
          </motion.div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {services.map((s,i)=><Card key={s.name} s={s} i={i}/>)}
        </div>
      </div>
    </section>
  )
}
