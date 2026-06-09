'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx, ry = my

    const move = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(animate)
    }

    const expand = () => {
      dot.style.width = '20px'
      dot.style.height = '20px'
      ring.style.width = '60px'
      ring.style.height = '60px'
      ring.style.borderColor = 'rgba(0,201,167,0.6)'
    }

    const shrink = () => {
      dot.style.width = '12px'
      dot.style.height = '12px'
      ring.style.width = '40px'
      ring.style.height = '40px'
      ring.style.borderColor = 'rgba(0,201,167,0.4)'
    }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    animate()

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width: 12, height: 12,
          background: '#00c9a7',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s',
          mixBlendMode: 'screen',
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          width: 40, height: 40,
          border: '1px solid rgba(0,201,167,0.4)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.4s, height 0.4s, border-color 0.4s',
        }}
      />
    </>
  )
}
