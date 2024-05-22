"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luke Coleman"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+40) 321 654 678"
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "American"
    },
    {
      fieldName: "Email",
      fieldValue: "luke.01@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaliable"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  items: [
    {
      company: 'Tech Solutions Inc',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2021',
    },
    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
    },
    {
      company: 'Tech Academy',
      position: 'Teaching assistant',
      duration: '2017 - 2018',
    },
    {
      company: 'Digital Agency',
      position: 'UI/UX Designer',
      duration: '2018 - 2019',
    },
    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2017 - 2018',
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  items: [
    {
      institution: 'Online Course Platform',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2023',
    },
    {
      institution: 'Codecademy',
      degree: 'Front-end Track',
      duration: '2022',
    },
    {
      institution: 'Online Course',
      degree: 'Programming Course',
      duration: '2020 - 2021',
    },
    {
      institution: 'Tech Institute',
      degree: 'Certified Web Developer',
      duration: '2019',
    },
    {
      institution: 'Design School',
      degree: 'Diploma in Graphic Design',
      duration: '2016 - 2018',
    },
    {
      institution: 'Community College',
      degree: 'Associate Degree in Computer Science',
      duration: '2014 - 2016',
    },
    
  ]
}

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ]

}

const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs 
          defaultValue='experience' 
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              experience
            </TabsContent>
            {/* education */}
            <TabsContent value='education' className='w-full'>
              education
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume