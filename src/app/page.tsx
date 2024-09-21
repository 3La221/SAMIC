import Navbar from "./_components/navbar";
import TopBar from "./_components/topbar";
import Hero from "./_sections/Hero";
import LaSamic from "./_sections/LaSamic";
import Calendrier from "./_sections/Calendrier";
import Actualite from "./_sections/Actualite";
import Groupes from "./_sections/Groupes";
import Archive from "./_sections/Archive";
import Footer from "./_sections/Footer";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  // Fetch data from Prisma
  const objectifs = await prisma.objectif.findMany();
  const missions = await prisma.mission.findMany();
  
  
  return (
    <div className="flex flex-col bg-background">
      <TopBar />
      <hr className="border-t border-dashed border-muted" />
      <div className="sticky top-0 z-50 bg-background">
        <Navbar />
      </div>


      <Hero />

      {/* Pass the fetched data to LaSamic */}
      <LaSamic initialObjectifs={objectifs} initialMissions={missions} />

      <Calendrier />
      <Actualite />
      <Groupes />
      <Archive />
      <Footer />
    </div>
  );
}
