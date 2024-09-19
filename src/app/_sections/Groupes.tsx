"use client"
import React from 'react'
import SectionTitle from '../_components/sectionTitle'
import { MdGroups } from "react-icons/md";
import GroupCard from '../_components/groupCard';
import { FaBug } from "react-icons/fa";
import { TiZoom } from "react-icons/ti";
import { FaBacterium } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { Appearing } from '../_components/appearing';

const Groupes = () => {

      const groups = [
            {
                  name: 'Diagnostic bactériologique',
                  image: '/assets/groups/group1.jpg',
                  icon: <FaBacterium className='text-secondary text-3xl m-auto mt-5' />
            },
            {
                  name: 'Résistance aux ATB ',
                  image: '/assets/groups/group2.jpg',
                  icon : <MdOutlineScience className='text-secondary text-3xl m-auto mt-5' />
            },
            {
                  name: 'Infections associées aux soins (IAS)- Prévention et contrôle de l’infection (PCI)',
                  image: '/assets/groups/group3.jpg',
                  icon : <FaBug className='text-secondary text-3xl m-auto mt-5' />

            },
            {
                  name:'Diagnostic virologique - résistance aux antiviraux',
                  image: '/assets/groups/group4.jpg',
                  icon: <TiZoom className='text-secondary text-3xl m-auto mt-5' />
            }
      ]


  return (
    <div className='flex flex-col items-center gap-4'>
      <SectionTitle title="Groupes" icon={<MdGroups className='text-primary' />} />
      <Appearing.FromBottom>

      <div className='grid  md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center  gap-4  '>
            {
                  groups.map((group, index) => (
                              <GroupCard key={index} name={group.name} image={group.image}  icon={group.icon}  />
                  ))
            }

      </div>
      </Appearing.FromBottom>

      
    </div>
  )
}

export default Groupes
