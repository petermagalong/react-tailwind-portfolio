import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/profile.jpg";
import frontend from "../public/frontend.png";
import code from "../public/code.png";
import { useState } from "react";
import ProjectCard from "@/modules/ProjectCard";
import { project } from "@/constants/data";
import Link from "next/link";

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
            <h1 className="text-xl font-burtons dark:text-white">
              developedbytian
            </h1>
            <ul className="flex items-center">
              <li
                onClick={() => setDarkMode(!darkMode)}
                className="dark:text-white"
              >
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
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-teal-200">
              Full Stack Developer | Software Engineer
            </h3>
            <p className=" text-medium py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Software Engineer providing services for programming and design
              content needs. join me down below and let&apos;s get cracking
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-teal-100">
            <AiFillTwitterCircle />
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/peter-christian-magalong-0ab318113/"
            >
              <AiFillLinkedin />
            </Link>
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
            <Image src={deved} alt="3dpict" layout="fill" objectFit="cover" />
          </div>
        </section>
        {/*   */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a developer, I&apos;ve done
              remote work for
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

          {/* FRONT END */}
          <div className="lg:flex gap-10 dark:text-white ">
            <div className="text-center  mx-auto shadow-lg p-10 rounded-xl my-10 w-4/5 dark:bg-slate-800">
              <div className="flex justify-center">
                <Image src={frontend} alt="design" width={120} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Frontend Services
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 ">Frontend tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">
                HTML, CSS, Javascript, Tailwind , MUIReact,
              </p>
              <p className="text-gray-800 py-1 dark:text-white">
                Vue Js (Vuetify), React Js,Next Js, ReactHooks , Redux Toolkit
              </p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>

            {/* BACK END */}
            <div className="text-center  mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
              <div className="flex justify-center">
                <Image src={code} alt="code" width={120} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Backend Services
              </h3>
              <p className="py-2">
                Creating web services and APIs used by front-end developers and
                mobile application developers.
              </p>
              <h4 className="py-4 text-teal-600">Technology I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">
                Prog.Laguage: Node js, TypeScript , etc.
              </p>
              <p className="text-gray-800 py-1 dark:text-white">
                Database: Prisma , Mysql, TypeOrm, Dynamo DB , etc.
              </p>

              <p className="text-gray-800 py-1 dark:text-white">
                Services: AWS, GoogleCloud , etc.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-2 dark:text-white">Porfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a developer , I&apos;ve done
              remote work for
              <span className="text-teal-500"> agencies </span>
              experience working for{" "}
              <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer Full Stack Development to develop your product.
            </p>
          </div>
          <h3 className=" text-3xl mt-4 py-2 dark:text-white">
            Industry Project&apos;s
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I choose to private all the code repository in this section regards
            of security.
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            {project.map((project, key) => {
              return <ProjectCard key={key} {...project} isIndustry={true} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
