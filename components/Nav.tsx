'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-500 ${
      scrolled
        ? 'bg-[rgba(245,243,239,0.88)] backdrop-blur-[24px] border-b border-black/[0.08] shadow-sm px-20 py-4'
        : 'px-20 py-7'
    }`}>
      <Link href="/" className="font-black text-[1.35rem] tracking-[-0.02em] text-[var(--ink)] no-underline flex items-center gap-1">
        <Image src="/logo.png" alt="Logo" width={150} height={50} />
      </Link>

      <ul className="flex gap-10 list-none">
        {[['Services','#services'],['About','#why'],['Process','#process'],['Clients','#testimonials']].map(([name,href])=>(
          <li key={name}><Link href={href} className="text-[var(--ink3)] no-underline text-[0.9rem] font-medium tracking-[0.01em] hover:text-[var(--teal)] transition-colors duration-300">{name}</Link></li>
        ))}
      </ul>

      <button className="bg-[var(--ink)] text-white border-none px-6 py-2.5 rounded-full font-[family-name:var(--font-urbanist)] text-[0.875rem] font-semibold cursor-none transition-all duration-300 hover:bg-[var(--teal)] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(13,158,135,0.3)]">
        Get in Touch
      </button>
    </nav>
  )
}
