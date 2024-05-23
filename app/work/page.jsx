"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Vitae quisquam labore ea aperiam veritatis. Facere distinctio non non veritatis et officia error. Exercitationem quisquam numquam omnis molestiae",
    stack: [
      {name: "Html 5"}, {name: "Css 5"}, {name: "Javascript"}
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "Vitae quisquam labore ea aperiam veritatis. Facere distinctio non non veritatis et officia error. Exercitationem quisquam numquam omnis molestiae",
    stack: [
      { name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Vitae quisquam labore ea aperiam veritatis. Facere distinctio non non veritatis et officia error. Exercitationem quisquam numquam omnis molestiae",
    stack: [
      { name: "Next.js" }, { name: "Tailwind.css" }
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },

]

const Work = () => {

  const [project, setProject] = useState(projects[0])

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <BsArrowUpRight />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black">
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            slider
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work