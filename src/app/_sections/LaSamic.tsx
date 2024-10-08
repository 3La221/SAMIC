"use client"; // Mark this as a client component
import React from 'react';
import ObjectifCard from '../_components/objectifCard';
import MissionCard from '../_components/missionCard';
import SectionTitle from '../_components/sectionTitle';
import SubSectionTitle from '../_components/subSectionTitle';
import ImageGallery from '../_components/imgGallery';
import { LuDna } from "react-icons/lu";
import { Appearing } from '../_components/appearing';

interface Organisation {
  id: number;
  title: string;
  desc: string;
  img: string;
}


interface Objectif {
  id: number;
  label: string;
}

interface Mission {
  id: number;
  label: string;
}

interface LaSamicProps {
  initialObjectifs: Objectif[];
  initialMissions: Mission[];
  initalOrganisations : Organisation[];
}

const LaSamic = ({ initialObjectifs, initialMissions , initalOrganisations }: LaSamicProps) => {
  console.log(initalOrganisations , initialMissions , initialObjectifs)
  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-8 mb-8'>
      <SectionTitle title={"La SAMiC"} icon={<LuDna className='text-primary rotate-90' />} />

      

      {/* Objectifs Section */}
      <SubSectionTitle title={"Objectifs"} />
      <div className='flex gap-6 flex-wrap justify-center'>
        <Appearing.Sequential>
          {initialObjectifs?.map((obj) => (
            <Appearing.FromBottom key={obj.id}>
              <ObjectifCard key={obj.id} label={obj.label} />
            </Appearing.FromBottom>
          ))}
        </Appearing.Sequential>
      </div>

      <hr className='border-t mt-6 border-muted w-3/4' />

      {/* Missions Section */}
      <SubSectionTitle title={"Missions"} />
      <div className='flex gap-6 flex-wrap justify-center'>
        <Appearing.Sequential>
          {initialMissions?.map((mission) => (
            <Appearing.FromBottom key={mission.id}>
              <MissionCard key={mission.id} label={mission.label} />
            </Appearing.FromBottom>
          ))}
        </Appearing.Sequential>
      </div>

      <hr className='border-t mt-6 border-muted w-3/4' />

      {/* Organisation Section */}
      <SubSectionTitle title={'Organisation'} />
      <Appearing.FromBottom>
        <ImageGallery initalOrganisations={initalOrganisations} />
      </Appearing.FromBottom>
    </div>
  );
};

export default LaSamic;
