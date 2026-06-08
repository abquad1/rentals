import dynamic from 'next/dynamic'

const Landing  = dynamic(() => import('./section/Landing/page'),   { ssr: false })
const Landlord = dynamic(() => import('./section/Landlord/page'),  { ssr: false })
const Tenant   = dynamic(() => import('./section/Tenant/page'),    { ssr: false })
const Contact  = dynamic(() => import('./section/Contacts/page'),  { ssr: false })

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