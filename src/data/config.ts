const config = {
  title: "Musashi | 3D Artist",
  description: {
    long: "Explore the portfolio of Musashi, a 3D Artist and developer passionate about creating interactive experiences, animations, and immersive visuals using modern web technologies.",
    short:
      "Discover Musashi's portfolio — a 3D artist crafting interactive and expressive digital experiences.",
  },
  keywords: [
    "Musashi",
    "Musashi portfolio",
    "3D Artist",
    "portfolio",
    "developer",
    "3D web",
    "interactive websites",
    "creative technologist",
    "animation",
    "react three fiber",
    "vite",
    "framer motion",
  ],
  author: "Musashi",
  email: "musashiixc@gmail.com",
  site: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    github: "",
  },
};

export { config };
