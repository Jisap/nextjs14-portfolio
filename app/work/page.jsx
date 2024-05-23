"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "Swiper/css"
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
  return (
    <div>Work</div>
  )
}

export default Work