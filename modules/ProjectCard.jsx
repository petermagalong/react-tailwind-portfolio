import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'

function ProjectCard({linkDemo,application,projectName,img,alt,role,projectDescription,reverse=false,isIndustry=false,toolTipLink=''}) {
  return (
    <section className={`shadow-lg p-5 text-center rounded-lg lg:flex ${reverse ? 'flex-row-reverse' : 'flex-row' } gap-5 mx-auto dark:bg-slate-800`}>
    <div className="flex-initial items-center my-auto lg:w-1/2 ">
      <Image
        src={img}
        alt={alt}
        className="rounded-xl object-cover"
        width={100}
        height={100}
        layout="responsive"
      />
    </div>
    <div className="leading-7 m-auto px-4 py-4 max-w-md lg:w-1/2 ">
      <h3 className="text-3xl py-2 font-bold dark:text-white">{projectName}</h3>
      <p className="text-md font-medium py-3 text-gray-500 dark:text-white">
        {projectDescription}
      </p>
      {
        role && <h3 className="text-1xl py-2 font-medium dark:text-white">Here i am a <span className="text-teal-500"> {role} </span></h3>
      }
      <div  className='min-w-screen flex justify-center gap-2 py-3 flex-wrap'>
        {
          application.map((stack,key) => {
          return (
          <div key={key} className='bg-slate-100 py-1 px-3 shadow-lg my-auto rounded-md'>
            <h4  className='text-xs font-medium' >
              {stack}
            </h4>
          </div>)
          })
        }  
      </div>
      <div className="flex justify-evenly m-auto max-w-fit gap-7 pt-5 dark:text-white">
        <div className={`flex  items-center w-20 h-10 py-1 ${isIndustry ? ' text-gray-700' : 'hover:text-teal-500 cursor-pointer'} dark:text-white`}>
          <p className="px-1">Code</p>
          <BsGithub className="text-4xl" />
        </div>

        <Link target="_blank" href={linkDemo || toolTipLink}> 
          <div className={`${linkDemo ==='' ? 'group flex relative' : 'flex'} items-center w-30 h-10 py-1 px-2 hover:text-teal-500 cursor-pointer` }>
            <p className="px-1 whitespace-nowrap">Live Demo</p>
            <FiExternalLink className="text-3xl" />
            {linkDemo === '' && 
            (<span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                          -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                Here is the proof that it exist
            </span>
            )}
          </div>
        </Link>
        
      </div>
    </div>
  </section>
  )
}

export default ProjectCard