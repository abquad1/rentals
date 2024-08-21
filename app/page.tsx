// import Image from "next/image";
import Contact from "./pages/Contacts/page";
import Landing from "./pages/Landing/page";
// import Home from "./pages/Landing/page"
import Landlord from "./pages/Landlord/page";
import Tenant from "./pages/Tenant/page";


export default function LandingPage() {
  return (
    <main className="min-h-screen ">
      
      <Landing />
      <Landlord />
      <Tenant />
      <Contact/>
    </main>
  );
}
