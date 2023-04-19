import Image from 'next/image'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'

function ProjectCard({img,alt,projectTitle,description,reverse=false}) {
  return (
    <section className={`shadow-lg p-5 text-center rounded-lg lg:flex ${reverse ? 'flex-row-reverse' : 'flex-row' } gap-5`}>
    <div className="flex-initial items-center my-auto lg:w-1/2 ">
      <Image
        src={img}
        alt={alt}
        className="rounded-xl object-cover"
        height={"100%"}
        layout="responsive"
      />
    </div>
    <div className="leading-7 m-auto px-4 py-4 max-w-md lg:w-1/2">
      <h3 className="text-3xl py-2 font-medium">{projectTitle}</h3>
      <p className="text-md font-medium py-3 text-gray-500 ">
        {description}
      </p>
      <div  className='min-w-screen flex justify-center gap-10 py-3 overflow-auto scrollbar-hide '>
        <div className='bg-slate-100 py-1 px-5 shadow-lg'>
          <h4  className='text-lg font-medium' >
            React
          </h4>
        </div>
        <div className='bg-slate-100 py-1 px-5 shadow-lg'>
          <h4  className='text-lg font-medium' >
            Scss
          </h4>
        </div>
        <div className='bg-slate-100 py-1 px-5 shadow-lg'>
          <h4  className='text-lg font-medium' >
            React
          </h4>
        </div>
        <div className='bg-slate-100 py-1 px-5 shadow-lg'>
          <h4  className='text-lg font-medium' >
            Scss
          </h4>
        </div>
        <div className='bg-slate-100 py-1 px-5 shadow-lg'>
          <h4  className='text-lg font-medium' >
            React
          </h4>
        </div>
        <div className='bg-slate-100 py-1 px-5 shadow-lg'>
          <h4  className='text-lg font-medium' >
            Scss
          </h4>
        </div>
      </div>
      <div className="flex justify-evenly m-auto max-w-fit gap-7 pt-5 ">
        <div className="flex items-center w-20 h-10 py-1 hover:text-teal-500 cursor-pointer">
          <p className="px-1">Code</p>
          <BsGithub className="text-4xl" />
        </div>
        <div className="flex items-center w-30 h-10 py-1 px-2 hover:text-teal-500 cursor-pointer">
          <p className="px-1 whitespace-nowrap">Live Demo</p>
          <FiExternalLink className="text-3xl" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectCard