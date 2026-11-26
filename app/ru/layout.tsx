import { Noto_Sans } from 'next/font/google'
import RuNavbar from './navbar'
import Footer from '../components/Footer'

const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-noto',
  display: 'swap',
})

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={notoSans.variable} style={{ fontFamily: 'var(--font-noto), system-ui, sans-serif' }}>
      <RuNavbar />
      {children}
      <Footer />
    </div>
  )
}
