import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-white">
        {children}
      </main>
      <Footer />
    </>
  )
}
