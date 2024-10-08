import Navbar from "./_components/navbar";
import TopBar from "./_components/topbar";
import Hero from "./_sections/Hero";
import LaSamic from "./_sections/LaSamic";
import Calendrier from "./_sections/Calendrier";
import Actualites from "./_sections/Actualites";
import Groupes from "./_sections/Groupes";
import Archive from "./_sections/Archive";
import Footer from "./_sections/Footer";

import { PrismaClient } from '@prisma/client';
import Contact from "./_sections/Contact";
export const revalidate = 0;
const prisma = new PrismaClient();

export default async function Home() {
  // Fetch data from Prisma
  const objectifs = await prisma.objectif.findMany();
  const missions = await prisma.mission.findMany();
  const organisations = await prisma.organisation.findMany();
  const events = await prisma.event.findMany();
  const formations = await prisma.formation.findMany();
  const actualites = await prisma.actualite.findMany();
  const congres = await prisma.congres.findMany();
  
  
  
  return (
    <div className="flex flex-col bg-background">
      <TopBar />
      <hr className="border-t border-dashed border-muted" />
      <div className="sticky top-0 z-50 bg-background">
        <Navbar initialCongres={congres} />
      </div>

      <Hero />

      <div id="samic" className=" pt-12 " >
      <LaSamic initialObjectifs={objectifs} initialMissions={missions} initalOrganisations={organisations} />
      </div>
      
      <div id="calendrier" className=" pt-12 " >
      <Calendrier events={events} formations={formations} />
      </div>

      <div id="actualites" className=" pt-12 " >
      <Actualites actualites={actualites} />
      </div>

      <div id="groupes" className=" pt-12 " >
      <Groupes  />  
      </div>

      <div id="contact" className=" pt-12 "  >
        <Contact />
      </div>
      

      <Archive />
      <Footer />
    </div>
  );
}
