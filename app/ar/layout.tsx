import { Cairo } from 'next/font/google'
import ArNavbar from './navbar'
import Footer from '../components/Footer'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cairo.variable} style={{ fontFamily: 'var(--font-cairo), system-ui, sans-serif' }}>
      <ArNavbar />
      {children}
      <Footer />
    </div>
  )
}
