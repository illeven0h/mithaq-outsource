'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.95,
    delay,
    ease: [0.23, 1, 0.32, 1],
  },
})

export default function Hero() {
  return (
    <section
      className="min-h-screen relative overflow-hidden pt-36 pb-20 px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--bg)' }}
    >
      {/* mesh gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% 30%,rgba(13,158,135,.07) 0%,transparent 60%),radial-gradient(ellipse 50% 40% at 80% 70%,rgba(184,147,74,.05) 0%,transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* HERO CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start text-left">
            
            <motion.h1
              {...fu(.25)}
              className="font-bold leading-none tracking-[-0.04em] text-[var(--ink)] mb-8"
              style={{ fontSize: 'clamp(2.5rem,5vw,5rem)' }}
            >
              Operations That
              <br />

              <span
                style={{
                  background:
                    'linear-gradient(135deg,var(--teal),var(--gold))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Scale With You
              </span>

              <br />

              <span
                className="font-light text-[var(--ink2)]"
                style={{ WebkitTextFillColor: 'var(--ink2)' }}
              >
                Seamlessly
              </span>
            </motion.h1>

            <motion.p
              {...fu(.45)}
              className="text-[1.15rem] leading-[1.75] text-[var(--ink3)] max-w-[560px] mb-12"
            >
              Premium outsourcing, digital solutions, and customer
              operations engineered for ambitious businesses that
              demand excellence at every touchpoint.
            </motion.p>

            <motion.div
              {...fu(.6)}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-9 md:py-4 rounded-full font-semibold text-white text-[0.9rem] md:text-[1rem] no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--ink)' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background =
                    'var(--teal)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow =
                    '0 16px 40px rgba(13,158,135,.28)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background =
                    'var(--ink)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow =
                    'none'
                }}
              >
                Explore Services →
              </a>

              <a
                href="#why"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-9 md:py-4 rounded-full font-medium text-[var(--ink)] text-[0.9rem] md:text-[1rem] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--teal)] hover:text-[var(--teal)]"
                style={{ border: '1.5px solid var(--border2)' }}
              >
                Why Mithaq
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:flex items-center justify-center">
            <Image
              src="/hero-image.svg"
              alt="Hero Illustration"
              width={400}
              height={400}
              className="max-w-full max-w-[500px] h-auto"
            />
          </div>
        </div>

        {/* STATS */}
        <motion.div
          {...fu(.85)}
          className="mt-16 lg:mt-24 flex flex-wrap justify-center items-center gap-6 lg:gap-16"
        >
          {[
            ['98', '%', 'Client Retention'],
            ['240', '+', 'Projects Delivered'],
            ['12', '+', 'Countries Served'],
            ['4.9', '★', 'Average Rating'],
          ].map(([n, s, l], i) => (
            <div
              key={l}
              className="flex items-center gap-10"
            >
              {i > 0 && (
                <div
                  className="hidden md:block w-px h-10"
                  style={{ background: 'var(--border2)' }}
                />
              )}

              <div className="text-center">
                <div className="font-black text-[2.2rem] leading-none tracking-[-0.03em] text-[var(--ink)]">
                  {n}
                  <span className="text-[var(--teal)]">
                    {s}
                  </span>
                </div>

                <div className="text-[0.76rem] text-[var(--ink3)] mt-1 font-medium tracking-[0.05em] uppercase">
                  {l}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}