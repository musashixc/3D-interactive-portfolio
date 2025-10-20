"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaBlender,
  FaCss3,
  FaEnvelope,
  FaGit,
  FaHtml5,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
  FaInstagram,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "musashiixc@gmail.com",
    href: "mailto:musashiixc@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "1234567890",
    href: "tel:1234567890",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/daddydoom0202?igsh=MTNjMHJkNHo4MzVuZQ==",
    content: "@daddydoom0202",
    icon: <FaInstagram height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "High-level programming language for the web.",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "Superset of JavaScript adding static typing.",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "The structure of the web.",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Brings beauty to the web.",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Node.js",
    content: "JavaScript runtime for backend development.",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "UI library for building interactive interfaces.",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Blender",
    content: "Forging 3D worlds where imagination meets geometry 🌀🧱.",
    icon: <FaBlender size={"50px"} color="#f5792a" />,
    color: "#f5792a",
  },
  {
    name: "Lua",
    content: "Lightweight scripting language, great for games.",
    icon: <VscCode size={"50px"} color="#0000CD" />,
    color: "#0000CD",
  },
  {
    name: "NginX",
    content: "High-performance web server and reverse proxy.",
    icon: <DiNginx size={"50px"} color="#008000" />,
    color: "#008000",
  },
  {
    name: "Vue.js",
    content: "Progressive framework for building UIs.",
    icon: <FaVuejs size={"50px"} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Express.js",
    content: "Minimal backend framework for Node.js.",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "Powerful open-source SQL database.",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "NoSQL database for modern applications.",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "Utility-first CSS framework for rapid UI development.",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "App development platform for authentication & hosting.",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Version control system for tracking code changes.",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "VS Code",
    content: "Developer-friendly code editor.",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "VIM",
    content: "Classic and powerful text editor for pros.",
    icon: <DiVim size={"50px"} color="#019733" />,
    color: "#019733",
  },
  {
    name: "Prettier",
    content: "Code formatter for consistent style.",
    icon: <SiPrettier size={"50px"} color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "Package manager for Node.js.",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Yarn",
    content: "Alternative package manager to npm.",
    icon: <FaYarn size={"50px"} color="#2C8EBB" />,
    color: "#2C8EBB",
  },
  {
    name: "Linux",
    content: "Powerful and open-source operating system.",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Kubuntu",
    content: "Linux distro with a beautiful KDE desktop.",
    icon: <SiKubuntu size={"50px"} color="#0077C4" />,
    color: "#0077C4",
  },
  {
    name: "Terminal",
    content: "Where true power users live.",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);

  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Musashi</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Web Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m Musashi, a self-taught developer passionate about 3D art,
              game design, and web development. I love blending creative worlds with code,
              building experiences that feel alive — from interactive portfolios to digital worlds.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, I&apos;m sculpting ideas in Blender, studying samurai philosophy,
              or experimenting with design and animation.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Tools Carousel"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                        title={tool.name}
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
