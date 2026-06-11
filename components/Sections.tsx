'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const steps=[
  {n:'01',t:'Discovery',d:'We immerse in your business goals, challenges, audience, and competitive landscape before a single line is written.'},
  {n:'02',t:'Strategy',d:'Positioning, architecture, operational roadmap all aligned to your real business objectives, not generic templates.'},
  {n:'03',t:'Design',d:'Visual and operational systems built for clarity and impact. Purposeful, memorable, and conversion-ready from day one.'},
  {n:'04',t:'Development',d:'Precision execution on modern infrastructure. Fast, accessible, scalable and built to last beyond launch day.'},
  {n:'05',t:'Optimization',d:'Data-driven refinement across every touchpoint until every KPI reaches its ceiling then we raise it higher.'},
  {n:'06',t:'Growth',d:"Ongoing partnership, iteration, and expansion. We're not a vendor we're the team that grows as you grow."},
]

  const email = 'mithaqtel@gmail.com.com'
  const phone = '+92 308 0700708'
  const phone2 = '051 4493050'

export function Process(){
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-80px'})
  return (
    <section id="process" className="py-16 md:py-28 px-5 md:px-12 lg:px-20" style={{background:'var(--bg)'}}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{opacity:0,y:36}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.8}}
          ref={ref} className="text-center mb-20">
          <h2 className="font-black tracking-[-0.03em] text-[var(--ink)] mb-3" style={{fontSize:'clamp(2rem,3.8vw,3.4rem)',lineHeight:1.05}}>
            Our Process
          </h2>
          <p className="text-[1.05rem] text-[var(--ink3)] leading-[1.75] max-w-[480px] mx-auto">
            A structured approach that turns complexity into clarity and clarity into results.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s,i)=>(
            <motion.div key={s.n}
              initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.75,delay:i*.07,ease:[0.23,1,0.32,1]}}
              className="group rounded-[20px] p-9 relative overflow-hidden cursor-none transition-all duration-[400ms]"
              style={{background:'#fff',border:'1px solid var(--border)',boxShadow:'0 2px 16px var(--shadow)'}}
              whileHover={{y:-5,boxShadow:'0 16px 40px var(--shadow2)'}}>
              <div className="font-black text-[4rem] leading-none tracking-[-0.06em] mb-4 transition-colors duration-300"
                style={{color:'rgba(13,158,135,.14)'}}>
                {s.n}
              </div>
              <h3 className="text-[1.05rem] font-bold text-[var(--ink)] mb-2 tracking-[-0.01em]">{s.t}</h3>
              <p className="text-[0.875rem] text-[var(--ink3)] leading-[1.65]">{s.d}</p>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[450ms]"
                style={{background:'linear-gradient(90deg,var(--teal),var(--gold))'}}/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials=[
  {text:"Mithaq completely transformed how we handle customer operations. Their team is proactive, professional, and genuinely invested in our success. Revenue up 340% in eight months.",name:'Sarah Rahman',role:'CEO, Nexus Finance',initials:'SR',col:'rgba(13,158,135,.12)',border:'rgba(13,158,135,.25)',tc:'var(--teal)'},
  {text:"Our dispatching was a mess before Mithaq. Now we handle three times the volume with dramatically fewer errors. The improvement in operational clarity is night and day.",name:'Marcus Klein',role:'COO, SwiftRide Group',initials:'MK',col:'rgba(184,147,74,.12)',border:'rgba(184,147,74,.25)',tc:'var(--gold)'},
  {text:"From brand strategy to social media to web everything Mithaq delivered was cohesive and beautifully executed. 80k followers in four months, and the brand finally feels premium.",name:'Jasmine Park',role:'Founder, Lumina Beauty',initials:'JP',col:'rgba(22,24,28,.07)',border:'var(--border2)',tc:'var(--ink)'},
]

export function Testimonials(){
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-80px'})
  return (
    <section id="testimonials" className="py-16 md:py-28 px-5 md:px-12 lg:px-20" style={{background:'var(--bg2)'}}>
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-10 md:mb-14">
          <motion.div initial={{opacity:0,x:-36}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.8}}>
            <h2 className="font-black tracking-[-0.03em] text-[var(--ink)]" style={{fontSize:'clamp(2rem,3.8vw,3.4rem)',lineHeight:1.05}}>
              Clients Who<br/>Saw the Difference
            </h2>
          </motion.div>
          <motion.div initial={{opacity:0,x:36}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.8,delay:.1}}>
            <p className="text-[1.05rem] text-[var(--ink3)] leading-[1.75]">
              The most honest measure of our work is the people we've worked with.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((t,i)=>(
            <motion.div key={t.name}
              initial={{opacity:0,y:36}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.8,delay:i*.1}}
              className="rounded-[20px] p-8 relative overflow-hidden cursor-none transition-all duration-[400ms]"
              style={{background:'#fff',border:'1px solid var(--border)',boxShadow:'0 2px 12px var(--shadow)'}}
              whileHover={{y:-4,boxShadow:'0 16px 40px var(--shadow2)',borderColor:'rgba(13,158,135,0.2)'}}>
              <div className="absolute -top-3 right-6 font-black text-[7rem] leading-none select-none pointer-events-none"
                style={{color:'rgba(13,158,135,.06)',fontFamily:'Urbanist'}}>
                "
              </div>
              <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_,j)=><span key={j} className="text-[var(--gold)] text-[.85rem]">★</span>)}</div>
              <p className="text-[.9rem] text-[var(--ink2)] leading-[1.72] mb-6 relative z-10">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[.85rem] flex-shrink-0"
                  style={{background:t.col,border:`1.5px solid ${t.border}`,color:t.tc}}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[.9rem] text-[var(--ink)] tracking-[-0.01em]">{t.name}</div>
                  <div className="text-[.75rem] text-[var(--ink3)] font-medium">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA(){
  const ref=useRef(null)
  const inView=useInView(ref,{once:true})

  const handleStartConversation = () => {
    window.location.href = `mailto:${email}?subject=Let's Build Something Together&body=Hi Mithaq team,%0D%0A%0D%0AI'd like to start a conversation about...`
  }

  return (
    <section id="contact" className="py-24 md:py-40 px-5 md:px-20 relative overflow-hidden text-center" style={{background:'var(--ink)'}}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background:'radial-gradient(ellipse 60% 80% at 20% 50%,rgba(13,158,135,.18) 0%,transparent 60%),radial-gradient(ellipse 50% 60% at 80% 50%,rgba(184,147,74,.1) 0%,transparent 55%)'
      }}/>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)',
        backgroundSize:'60px 60px',
        maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)',
        WebkitMaskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)',
      }}/>
      <div className="max-w-[1200px] mx-auto relative z-10" ref={ref}>
        <motion.div initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.9}}>
          <h2 className="font-black leading-none tracking-[-0.04em] text-white mb-6"
            style={{fontSize:'clamp(2.5rem,5vw,4.5rem)'}}>
            Ready to Build<br/>
            <span style={{background:'linear-gradient(135deg,#13c4a5,#b8934a)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
              Something That Lasts?
            </span>
          </h2>
          <p className="text-[1.1rem] leading-[1.75] max-w-[500px] mx-auto mb-8" style={{color:'rgba(255,255,255,.6)'}}>
            Let's turn your vision into operations, experiences, and growth that compound starting from the very first conversation.
          </p>

          {/* Contact details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
            <a href={`mailto:${email}`}
              className="flex items-center gap-2 no-underline transition-opacity duration-300 hover:opacity-80"
              style={{color:'rgba(255,255,255,.75)'}}>
              <span className="text-[var(--teal)] text-[1rem]">✉</span>
              <span className="text-[0.95rem] font-medium">{email}</span>
            </a>
            <div className="hidden md:block" style={{width:'1px',height:'18px',background:'rgba(255,255,255,.15)'}}/>
            <a href={`tel:${phone.replace(/\D/g,'')}`}
              className="flex items-center gap-2 no-underline transition-opacity duration-300 hover:opacity-80"
              style={{color:'rgba(255,255,255,.75)'}}>
              <span className="text-[var(--teal)] text-[1rem]">📞</span>
              <span className="text-[0.95rem] font-medium">{phone}</span>
            </a>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleStartConversation}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-white text-[1rem] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-0"
              style={{background:'var(--teal)'}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='var(--teal-light)';(e.currentTarget as HTMLElement).style.boxShadow='0 16px 40px rgba(13,158,135,.4)'}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='var(--teal)';(e.currentTarget as HTMLElement).style.boxShadow='none'}}>
              Start the Conversation →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export function Footer(){
  return (
    <footer className="px-5 md:px-12 lg:px-20 pt-10 md:pt-12 pb-8" style={{background:'var(--bg)',borderTop:'1px solid var(--border)'}}>
      <div className="max-w-[1200px] mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12 mb-10">

          {/* Logo */}
          <div className="flex items-start">
            <Image src="/logo.png" alt="Mithaq Outsource" width={100} height={50} />
          </div>

          {/* Nav links */}
          <ul className="flex flex-col gap-2 list-none mt-1">
            <li className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[var(--ink3)] mb-1">Navigation</li>
            {[['Services','#services'],['About','#why'],['Process','#process'],['Clients','#testimonials']].map(([n,h])=>(
              <li key={n}>
                <a href={h} className="text-[0.85rem] text-[var(--ink3)] no-underline font-medium hover:text-[var(--teal)] transition-colors duration-300">{n}</a>
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="flex flex-col gap-2 mt-1">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[var(--ink3)] mb-1">Get in Touch</p>
            <a href={`mailto:${email}`}
              className="text-[0.85rem] text-[var(--ink3)] no-underline font-medium hover:text-[var(--teal)] transition-colors duration-300">
              {email}
            </a>
            <a href={`tel:${phone.replace(/\s/g,'')}`}
              className="text-[0.85rem] text-[var(--ink3)] no-underline font-medium hover:text-[var(--teal)] transition-colors duration-300">
              {phone}
            </a>
            <a href={`tel:${phone2.replace(/\s/g,'')}`}
              className="text-[0.85rem] text-[var(--ink3)] no-underline font-medium hover:text-[var(--teal)] transition-colors duration-300">
              {phone2}
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2 mt-1">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[var(--ink3)] mb-1">Office</p>
            <address className="not-italic text-[0.85rem] text-[var(--ink3)] leading-[1.8]">
              Office no. 08, G Liaqat Avenue Plaza<br/>
              Jinnah Garden Phase 1, Islamabad<br/>
              Pakistan
            </address>
          </div>

        </div>

        {/* Bottom: copyright centered */}
        <div style={{borderTop:'1px solid var(--border)'}} className="pt-6 text-center">
          <div className="text-[0.78rem] text-[var(--ink3)]">© 2025 Mithaq Outsource. All rights reserved.</div>
        </div>

      </div>
    </footer>
  )
}
