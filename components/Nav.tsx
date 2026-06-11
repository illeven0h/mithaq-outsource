'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  ['Services', '#services'],
  ['About', '#why'],
  ['Process', '#process'],
  ['Clients', '#testimonials'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* NAV BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(245,243,239,0.88)] backdrop-blur-[24px] border-b border-black/[0.08] shadow-sm px-5 md:px-12 lg:px-20 py-4'
          : 'px-5 md:px-12 lg:px-20 py-7'
      }`}>

        {/* Logo */}
        <Link
          href="/"
          className="no-underline flex items-center transition-opacity duration-300"
          style={{ opacity: menuOpen ? 0 : 1, pointerEvents: menuOpen ? 'none' : 'all' }}
        >
          <Image src="/logo.png" alt="Mithaq Logo" width={150} height={50} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {navLinks.map(([name, href]) => (
            <li key={name}>
              <Link
                href={href}
                className="text-[var(--ink3)] no-underline text-[0.9rem] font-medium font-[family-name:var(--font-urbanist)] tracking-[0.01em] hover:text-[var(--teal)] transition-colors duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-[var(--ink)] text-white border-none px-6 py-2.5 rounded-full text-[0.875rem] font-semibold font-[family-name:var(--font-urbanist)] cursor-pointer transition-all duration-300 hover:bg-[var(--teal)] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(13,158,135,0.3)]">
          Get in Touch
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] bg-transparent border-none cursor-pointer p-0 z-[101]"
        >
          <span
            className="block w-6 h-[2px] rounded-full transition-all duration-300 origin-center"
            style={{
              background: 'var(--ink)',
              transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-[2px] rounded-full transition-all duration-300"
            style={{
              background: 'var(--ink)',
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
            }}
          />
          <span
            className="block w-6 h-[2px] rounded-full transition-all duration-300 origin-center"
            style={{
              background: 'var(--ink)',
              transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* BACKDROP */}
      <div
        onClick={() => setMenuOpen(false)}
        className="md:hidden fixed inset-0 z-[98] transition-all duration-300"
        style={{
          background: 'rgba(22,24,28,0.45)',
          backdropFilter: menuOpen ? 'blur(4px)' : 'none',
          WebkitBackdropFilter: menuOpen ? 'blur(4px)' : 'none',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      />

      {/* MOBILE DRAWER */}
      <div
        className="md:hidden fixed top-0 right-0 h-full z-[99] w-[78vw] max-w-[300px] flex flex-col"
        style={{
          background: 'var(--bg)',
          boxShadow: '-8px 0 48px rgba(22,24,28,0.14)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.42s cubic-bezier(0.23,1,0.32,1)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <Image src="/logo.png" alt="Mithaq Logo" width={120} height={44} />
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-6 pt-4 flex-1">
          {navLinks.map(([name, href], i) => (
            <Link
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="no-underline flex items-center justify-between py-4 group"
              style={{
                borderBottom: '1px solid var(--border)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(18px)',
                transition: `opacity 0.38s ease ${0.08 + i * 0.06}s, transform 0.38s ease ${0.08 + i * 0.06}s`,
              }}
            >
              <span
                className="text-[1.05rem] font-semibold transition-colors duration-200"
                style={{ color: 'var(--ink)' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--teal)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--ink)')}
              >
                {name}
              </span>
              <span style={{ color: 'var(--teal)', fontSize: '0.85rem' }}>→</span>
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 pb-10 pt-6">
        <a
            href="mailto:mithaqtel@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-full py-[14px] rounded-full font-[family-name:var(--font-urbanist)] font-medium text-white text-[0.95rem] no-underline transition-all duration-300"
            style={{ background: 'var(--ink)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--teal)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--ink)')}
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </>
  )
}