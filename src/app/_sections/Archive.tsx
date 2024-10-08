import React from 'react'
import SectionTitle from '../_components/sectionTitle'
import ArchiveCard from '../_components/archiveCard';
import { RiArchiveDrawerFill } from "react-icons/ri";
import { MdInsertPhoto } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";

const Archive = () => {

      const archiveSections = [
            {
                  title: 'Éditions',
                  description: 'Explorez nos différentes éditions et publications au fil des ans.',
                  icon :<FaBook className='text-secondary text-3xl m-auto mt-5' />,
                  to: '/editions'
            } ,
            {
                  title: 'Publications',
                  description: 'Parcourez les articles, les newsletters et les rapports spéciaux.',
                  icon :<IoNewspaper className='text-secondary text-3xl m-auto mt-5' />,
                  to: '/publications'
            },
            {
                  title: 'Com-posters',
                  description: 'Accédez à une collection d\'affiches créatives et informatives.',
                  icon :<GiNewspaper className='text-secondary text-3xl m-auto mt-5' />,
                  to: '/composters'

            },
            {
                  title: 'Vidéos',
                  description: 'Regardez notre contenu vidéo archivé et nos interviews.',
                  icon :<FaVideo className='text-secondary text-3xl m-auto mt-5' />,
                  to: '/videos'
            },
            {
                  title: 'Photos',
                  description: 'Regardez notre contenu vidéo archivé et nos interviews.',
                  icon :<MdInsertPhoto className='text-secondary text-3xl m-auto mt-5' />,
                  to: '/images'
            }

      ]

  return (
    <div className='flex flex-col items-center gap-6' >
      <SectionTitle title="Archive" icon={<RiArchiveDrawerFill className='text-primary' />} />


      <div className='flex flex-wrap justify-center items-center gap-2'>
            {
                  archiveSections.map((section, index) => (
                        <ArchiveCard key={index} title={section.title} description={section.description} icon={section.icon} to={section.to} />
                  ))
            }

      </div>


    </div>
  )
}

export default Archive
