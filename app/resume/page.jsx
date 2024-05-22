"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodejs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

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
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaNodejs />,
      name: "node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ]

}

const Resume = () => {
  return (
    <div>

    </div>
  )
}

export default Resume