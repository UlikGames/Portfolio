// Copyright UlikGames 2023. All Rights Reserved.
// Project: portfolio
// Author contact: https://github.com/UlikGames
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Ulvin Najafov",
  description:
    "I bridge the gap between web development and game development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://ulikgames.vercel.app",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I develop games with UE5",
  "I design and develop motion",
];

export const EMAIL = "ulvin.oguzlu@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ulvin-najafov-b29b21237/",
  github: "https://github.com/UlikGames",
  instagram: "https://www.instagram.com/ulvin_necefov/",
  facebook: "https://www.facebook.com/people/Ulvin-Necefov/pfbid02PUEu5ibXNsjpvWa9fLgV7iB5qCMRUwjeMzNC4bAHT3UAaRbbAApsNPZP1ibeDQWfl/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Behind the Rooms",
    image: "/projects/backrooms.png",
    blurImage: "/projects/blur/backrooms-blur.png",
    description: "Horror game made with Unreal Engine",
    gradient: ["#5E4C06", "#746528"],
    url: "https://github.com/UlikGames/Behind-the-Rooms",
    tech: ["unreal"],
  },
  {
    name: "Personal Portfolio",
    image: "/projects/portfolio.png",
    blurImage: "/projects/blur/portfolio-blur.png",
    description: "Interactive Portfolio with Next, GSAP, Tailwind, and React",
    gradient: ["#172839", "#334659"],
    url: "https://ulikgames-github-io.vercel.app",
    tech: ["next", "gsap", "tailwind", "react", "vercel"],
  },
  {
    name: "Fakeflix",
    image: "/projects/netflix.png",
    blurImage: "/projects/blur/netflix-blur.png",
    description: "A clone of Netflix",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://fakeflix-ug.vercel.app",
    tech: ["typescript", "react", "sass", "vercel"],
  },
  {
    name: "Chain Puzzle Simulator",
    image: "/projects/chain.png",
    blurImage: "/projects/blur/chain-blur.png",
    description: "The puzzle that consists of two inter-looping tracks which hold 30 marbles",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://ulikgames.github.io/chain-puzzle",
    tech: ["javascript", "vuejs", "html"],
  },
  {
    name: "Space Factory",
    image: "/projects/space-factory.png",
    blurImage: "/projects/blur/space-factory-blur.png",
    description: "Incremental factory game about resource mining, exploration.",
    gradient: ["#245B57", "#004741"],
    url: "https://ulik-space-factory.vercel.app/",
    tech: ["vuejs", "css", "html", "javascript", "vercel"],
  },
  {
    name: "Art of Silence",
    image: "/projects/art-of-silence.png",
    blurImage: "/projects/blur/art-of-silence-blur.png",
    description: "Very short story game with puzzles",
    gradient: ["#003052", "#167187"],
    url: "https://ulikgames.github.io/Art-of-Silence/",
    tech: ["javascript", "css", "less", "html"],
  },
  {
    name: "Ulikius",
    image: "/projects/ulikius.png",
    blurImage: "/projects/blur/ulikius-blur.png",
    description: "Operius from OperaGX but Ulikius version",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://ulikgames.github.io/Ulikius/",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "Windows XP",
    image: "/projects/windows-xp.png",
    blurImage: "/projects/blur/windows-xp-blur.png",
    description: "A clone of dear Windows XP",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://ulikgames.github.io/windows-xp",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "League Champ Randomizer",
    image: "/projects/league-randomizer.png",
    blurImage: "/projects/blur/league-randomizer-blur.png",
    description: "Generate a random League of Legends champion from all available champions within the game",
    gradient: ["#3d0668", "#54217b"],
    url: "https://ulikgames.github.io/League-Champ-Randomizer/",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "League of Legends",
    image: "/projects/lol.png",
    blurImage: "/projects/blur/lol-blur.png",
    description: "A clone of our dear little League of Legends",
    gradient: ["#172839", "#334659"],
    url: "https://ulikgames.github.io/league-of-legends/login/index.html",
    tech: ["html", "css", "javascript", "bootstrap", "figma"],
  },
  {
    name: "League Login Screen",
    image: "/projects/league.png",
    blurImage: "/projects/blur/league-blur.png",
    description: "League of Legends login screen with Next.js",
    gradient: ["#142D46", "#2E4964"],
    url: "https://league-client-next-js.vercel.app/",
    tech: ["next", "vercel"],
  },
  {
    name: "Math Square",
    image: "/projects/math.png",
    blurImage: "/projects/blur/math-blur.png",
    description: "A Math game craeted with HTML/CSS/JS",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://ulikgames.github.io/Math-Square/",
    tech: ["javascript", "jquery", "css", "html"],
  },
  {
    name: "CyberType",
    image: "/projects/cyber.png",
    blurImage: "/projects/blur/cyber-blur.png",
    description: "Speedtype test but in aestethic version",
    gradient: ["#084700", "#247123"],
    url: "https://ulikgames.github.io/CyberType/",
    tech: ["javascript", "css", "html"],
  },
  {
    name: "Tic-Tac-Toe Neon",
    image: "/projects/tictac.png",
    blurImage: "/projects/blur/tictac-blur.png",
    description: "Tic-Tac-Toe modern and aestethic version",
    gradient: ["#3d0668", "#54217b"],
    url: "https://ulikgames.github.io/Tic-Tac-Toe-Neon/",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "Cool Particles",
    image: "/projects/particle.png",
    blurImage: "/projects/blur/particle-blur.png",
    description: "Three.js project cause I was bored",
    gradient: ["#552A04", "#614023"],
    url: "https://ulikgames.github.io/cool-particles/",
    tech: ["three", "javascript", "html", "css"],
  },
  {
    name: "Among Us Discord Bot",
    image: "/projects/among.png",
    blurImage: "/projects/blur/among-blur.png",
    description: "Discord bot that mutes and unmutes players of the game among us automatically",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://github.com/UlikGames/AmongUsBot",
    tech: ["npm", "javascript"],
  },
  {
    name: "Cat and wool ball",
    image: "/projects/cat.png",
    blurImage: "/projects/blur/cat-blur.png",
    description: "A cute cat playing wool ball",
    gradient: ["#245B57", "#004741"],
    url: "https://ulikgames.github.io/Cat-and-wool-ball/",
    tech: ["gsap", "three", "html", "css"],
  },
  {
    name: "Musical Christmas",
    image: "/projects/christmas.png",
    blurImage: "/projects/blur/christmas-blur.png",
    description: "Christmas trees work with rhythm",
    gradient: ["#552A04", "#614023"],
    url: "https://ulikgames.github.io/Musical-Christmas",
    tech: ["three", "javascript", "html", "css"],
  },
  {
    name: "PONG Game 3D",
    image: "/projects/pong.png",
    blurImage: "/projects/blur/pong-blur.png",
    description: "A web based 2 players pong game",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://ulikgames.github.io/PONG-Game-3D/",
    tech: ["three", "javascript", "css", "html"],
  },
  {
    name: "Stars",
    image: "/projects/star.png",
    blurImage: "/projects/blur/star-blur.png",
    description: "Just stars",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://ulikgames.github.io/Stars-Three.js/",
    tech: ["three", "javascript", "html"],
  },
];

export const SKILLS = {
  frontend: [
    "html",
    "css",
    "javascript",
    "jquery",
    "bootstrap",
    "vuejs",
    "next",
    "typescript",
    "gsap",
    "three",
    "tailwind",
    "sass",
    "svg",
    "less",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["github", "vercel", "unreal", "godot", "unity", "git", "aftereffects", "lightroom"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "First Professional Milestone!",
    size: ItemSize.SMALL,
    subtitle: "First job! 🥳 Web design and development for FitoBiyota (Currunt)",
    slideImage: "/timeline/fitobiyota.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Start to make my dream project",
    size: ItemSize.SMALL,
    subtitle: "Designed and Developed Behind the Backrooms",
    slideImage: "/timeline/backrooms.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lots of Projects",
    size: ItemSize.SMALL,
    subtitle:
      "Contribute lots of open-source projects on Github",
    slideImage: "/timeline/project.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Starting Istanbul Technical University 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "4 years to spend laying the foundation of Frontend Engineering, UI/UX, and Game Developing!",
    slideImage: "/timeline/itu.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from Secondary School 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "The end of 11 years of adventure",
    slideImage: "/timeline/graduate.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Started to web design course",
    size: ItemSize.SMALL,
    subtitle:
      "Started to learn HTML/CSS/JS and end course with highest degree.",
    slideImage: "/timeline/certificate.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2015",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Secondary School",
    size: ItemSize.SMALL,
    subtitle: "Turkish Diyanet Foundation Baku Turkish High SchooL",
    image: "/timeline/tdv.svg",
    slideImage: "/timeline/tdv.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2009",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Primary School",
    size: ItemSize.SMALL,
    subtitle:
      "Baku Ataturk Lyceum",
    image: "/timeline/ataturk.svg",
    slideImage: "/timeline/ataturk.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
