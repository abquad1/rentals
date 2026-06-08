import dynamic from 'next/dynamic'

const Landing  = dynamic(() => import('./pages/Landing/page'),   { ssr: false })
const Landlord = dynamic(() => import('./pages/Landlord/page'),  { ssr: false })
const Tenant   = dynamic(() => import('./pages/Tenant/page'),    { ssr: false })
const Contact  = dynamic(() => import('./pages/Contacts/page'),  { ssr: false })

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Landing />
      <Landlord />
      <Tenant />
      <Contact />
    </main>
  )
}