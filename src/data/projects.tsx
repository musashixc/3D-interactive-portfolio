// src/data/projects.tsx
// plain data file (no "use client")
export type ProjectData = {
  title: string;
  description: string;
  images: string[]; // public paths (strings)
};

const projects: ProjectData[] = [
  {
    title: "Portfolio Website",
    description: `A 3D interactive portfolio crafted with precision — merging design, animation, and storytelling.
I focus on web design, smooth UX transitions, and React + Three.js visual experiences.
I designed a custom 3D keyboard headblast — modeling, texturing, and animating it myself. I also build responsive websites and UI that convert.`,
    images: [
      "/assets/projects-screenshots/portfolio/portfolio1.png",
      "/assets/projects-screenshots/portfolio/portfolio2.png",
      "/assets/projects-screenshots/portfolio/portfolio3.png",
    ],
  },
  {
    title: "Roblox / Lua Scripting",
    description: `2+ years of Lua scripting experience. I write clean, modular, and scalable Lua code for gameplay systems, UI logic, and performance optimizations.
I focus on maintainable patterns and bug-free implementations.`,
    images: [
      "/assets/projects-screenshots/roblox/roblox1.png",
      "/assets/projects-screenshots/roblox/roblox2.png",
      "/assets/projects-screenshots/roblox/roblox3.png",
    ],
  },
  {
    title: "Blender & 3D Design",
    description: `Passionate about 3D modeling and animation — from stylized props to motion design.
I experiment with lighting, shaders, and composition to craft memorable assets and integrate them into interactive experiences.`,
    images: [
      "/assets/projects-screenshots/blender/blender1.png",
      "/assets/projects-screenshots/blender/blender2.png",
      "/assets/projects-screenshots/blender/blender3.png",
    ],
  },
];

export default projects;
