"use client"
import Navbar from "./_components/navbar";
import TopBar from "./_components/topbar";
import Hero from "./_sections/Hero";
import LaSamic from "./_sections/LaSamic";
import Calendrier from "./_sections/Calendrier";
import Actualite from "./_sections/Actualite";
import Groupes from "./_sections/Groupes";
import Archive from "./_sections/Archive";
import { motion, useScroll } from "framer-motion"


export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
   <div className="flex flex-col">

    <TopBar/>

    <hr className="border-t border-dashed border-muted" />



    <motion.div
      className="sticky top-0 z-50 bg-background">
      <Navbar />
      <motion.div style={{ scaleX: scrollYProgress }} />  
    </motion.div>



    
    <Hero/>
<motion.div
  initial={{ opacity: 0 , y : 50 }}
  whileInView={{ opacity: 1 , y : 0 }}
  transition={{ duration: 1}}
  
  
>
<LaSamic  />

</motion.div>

    <Calendrier/>

    <Actualite/>

    <Groupes/>

    <Archive/>

   </div>
  );
}
