import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/profile.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import zappy from "../public/projects/zappy.png";
import web2 from "../public/web2.png";
// import web3 from "../public/web3.png";
// import web4 from "../public/web4.png";
// import web5 from "../public/web5.png";
// import web6 from "../public/web6.png";
import { useState } from "react";
import ProjectCard from "@/modules/ProjectCard";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Peter Christian Portfolio</title>
        <meta
          name="description"
          content="Generate by peter christian magalong"
        ></meta>
        <link rel="icon" href="" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbytian</h1>
            <ul className="flex items-center">
              <li onClick={() => setDarkMode(!darkMode)}>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="http://"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Peter Christian Magalong
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl">
              Full Stack Developer | Software Engineer
            </h3>
            <p className=" text-medium py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Software Engineer providing services for programming and design
              content needs. join me down below and let&apos;s get cracking
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
            <Image src={deved} alt="3dpict" layout="fill" objectFit="cover" />
          </div>
        </section>
        {/*   */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center  mx-auto shadow-lg p-10 rounded-xl my-10 w-4/5">
              <div className="flex justify-center">
                <Image src={design} alt="design" width={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Disign tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center  mx-auto shadow-lg p-10 rounded-xl my-10 ">
              <div className="flex justify-center">
                <Image src={code} alt="code" width={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Back-End Services
              </h3>
              <p className="py-2">
                Creating web services and APIs used by front-end developers and
                mobile application developers..
              </p>
              <h4 className="py-4 text-teal-600">Technology I use</h4>
              <p className="text-gray-800 py-1">
                Prog.Laguage: Node js, TypeScript , etc.
              </p>
              <p className="text-gray-800 py-1">
                Database: Prisma , Mysql, TypeOrm, Dynamo DB , etc.
              </p>

              <p className="text-gray-800 py-1">
                Services: AWS, GoogleCloud , etc.
              </p>
            </div>
            <div className="text-center  mx-auto shadow-lg p-10 rounded-xl my-10 ">
              <div className="flex justify-center">
                <Image src={consulting} alt="consulting" width={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Disign tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-2">Porfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer , I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <h3 className=" text-3xl mt-4 py-2">Industry Project's</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <ProjectCard
              img={zappy}
              alt="project1"
              projectTitle="Zappy"
              description="Zappy is a CMS marketing platform that collaborates with various Cybercommerce that provides and manufacture goods. The System was initialize during the pandemic to practice the idea of contact less purchase of products."
            />
            <ProjectCard
              img={web2}
              alt="Kuko ni Bea"
              projectTitle="Kuko ni Bea"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo vel quis aspernatur corporis. Similique odit atque magni nesciunt, expedita sunt ad? Repellat perferendis illum ut nesciunt perspiciatis earum sequi magni?"
              reverse={true}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
