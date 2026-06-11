import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'
import SmoothScroll from '@/components/SmoothScroll'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-urbanist',
})

export const metadata: Metadata = {
  title: 'Mithaq Outsource',
  description: 'Premium outsourcing, digital solutions, and customer operations — engineered for ambitious businesses that demand excellence at every touchpoint.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  )
}
