export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const heroTags = [
  'a lively social initiator',
  'a lifelong learner',
  'a colourful conversationalist',
  'a curious problem solver',
]

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'iSketch - Sign Up Page',
    desc: "A sign up form to show my raw front-end skills using HTML, CSS and Javascript. The form should redirect to a login page as well where the user can access the iSketch app, which is one of my other projects that's listed on my profile.",
    subdesc: "The main challenge I faced while building was entirely the front-end aspect. The form elements being such an old part of the internet is hard to style. It was absolutely necessary to rid of all default styles and then apply more rounded borders, bigger fonts and such to make it look more modern.",
    href: 'https://diaalrahman.github.io/sign-up-form-for-iSketch/',
    texture: '/portfolio/textures/project/signup.png',
    // logo: '/assets/iSketch.png',
    logoStyle: {
      // backgroundColor: '#2A1816',
      // boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/portfolio/assets/spotlight1.png',
    tags: [
      // {
      //   id: 1,
      //   name: 'React.js',
      //   path: '/assets/react.svg',
      // },
    ],
  },
  {
    title: 'iSketch - Etch-A-Sketch App',
    desc: "An etch-a-sketch app that follows the pointer and marks any square that detected a mouse hover. Try drawing an apple! The most challenging aspect was figuring out how to implement the squares themselves. How to build them, how to update them based on the grid size, and how to add and remove event listeners based on which option was toggled. ",
    subdesc:
      "The solution to building the div was to essentially divide the total height and width to each cell accordingly, and for the event listeners I mostly used name functions which helped in removing those event listeners later on.",
    href: 'https://diaalrahman.github.io/etch-a-sketch/',
    texture: '/portfolio/textures/project/isketch.png',
    // logo: '/assets/project-logo2.png',
    // logoStyle: {
    // backgroundColor: '#13202F',
    // border: '0.2px solid #17293E',
    // boxShadow: '0px 0px 60px 0px #2F6DB54D',
    // },
    spotlight: '/portfolio/assets/spotlight2.png',
    tags: [
      // {
      //   id: 1,
      //   name: 'React.js',
      //   path: '/assets/react.svg',
      // },
    ],
  },
  {
    title: 'D Library - Personal Library',
    desc: "The current implementation only focusses on the JavaScript aspect, and less so on the front-end. This is the foundation on which I will be building the visuals for this library app. I have plans to incorporate a database such that individual users can log in and have saved states of their library. In the current version, the user is able to add/remove books, keep track of page numbers, and if they have already read the book. From my previous projects, I was aware of how treating the inherent logic and the front-end visuals as separate concerns was really important. The planning phase was easier with this mindset, the coding aspect even easier. ",
    subdesc:
      "Initially, I had use object constructors to implement the project. But upon learning about classes, I went back to this project to reimplement it using the JS class syntax. This taught me the importance of writing readable code, even for simple applications like this such that any other developer understands what's going on even if they have never seen the source code before. Because it was readable, I was able to reimplement it easily despite having a few months gap between the original implementation.",
    href: "https://diaalrahman.github.io/d-library/",
    texture: '/portfolio/textures/project/dlib.png',
    // logo: '/assets/project-logo3.png',
    // logoStyle: {
    //   backgroundColor: '#60f5a1',
    //   background:
    //     'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    //   border: '0.2px solid rgba(208, 213, 221, 1)',
    //   boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    // },
    spotlight: '/portfolio/assets/spotlight3.png',
    tags: [
      // {
      //   id: 1,
      //   name: 'React.js',
      //   path: '/assets/react.svg',
      // },
    ],
  },
  {
    title: 'Noughts and Crosses - Tic-Tac-Toe Game',
    desc: "I implemented an interesting solution that has a better time complexity than just brute forcing the game status each time. Because there are exactly 8 game statuses that corresponds to a win, which was stored in an array. The game status was represented using bits for each cell and each player had one, an example being '0b111000000, // Row 1', which shows that this player got three in a row. Surprisingly, this wasn't the most challenging aspect, it was difficult to plan the project to the minute detail. I ensured to spend the most time in the planning phase and deciding what 'classes' and 'methods' I would work with. My aim was to build a modularized and organized codebase, which I later on implemented using IIFE's. ",
    subdesc:
      "I learned how important it is to visualize the project from the user's perspective. Because after I overcame that obstacle, building the code was easy because I knew exactly what context to work with.The other obstacle I faced was implementing a true restart logic where I remove the current players and the game itself from memory. This obstacle was an important learning lesson that further taught how the front-end visuals and the barebones are concerns that are to be dealt with separately.",
    href: 'https://diaalrahman.github.io/tic-tac-toe-2.0/',
    texture: '/portfolio/textures/project/ttt.png',
    // logo: '/assets/project-logo4.png',
    // logoStyle: {
    //   backgroundColor: '#0E1F38',
    //   border: '0.2px solid #0E2D58',
    //   boxShadow: '0px 0px 60px 0px #2F67B64D',
    // },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/portfolio/assets/react.svg',
      },
    ],
  },
  {
    title: 'Rose Gold Calculator - Calculator App',
    desc: "I implemented the visual calculator by trying to simulate the behavior of basic Casio calculators. The most challenging aspect was surely trying to coordinate the visual elements with the event listeners and implementing a cache system that could handle chain calculations. ",
    subdesc: "The project also showed me how free a JavaScript writer can be. There are no rules forcing the user to write a build the codebase a certain way like seen in C++ or such. It was interesting and it helped me recognize the importance of code modularization and organization, which I eventually learned.",
    href: 'https://diaalrahman.github.io/rose-gold-calculator/',
    texture: '/portfolio/textures/project/calc.png',
    // logo: '/assets/project-logo5.png',
    // logoStyle: {
    // backgroundColor: '#1C1A43',
    // border: '0.2px solid #252262',
    // boxShadow: '0px 0px 60px 0px #635BFF4D',
    // },
    spotlight: '/portfolio/assets/spotlight5.png',
    tags: [
      // {
      //   id: 1,
      //   name: 'React.js',
      //   path: '/assets/react.svg',
      // },
    ],
  },
];

export const calculateScales = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    rubiksCubeScale: isSmall ? 4 : isMobile ? 5 : 6.5,
    reactLogoScale: isSmall ? 0.15 : isMobile ? 0.25 : 0.5,
    chessScale: isSmall ? 0.05 : isMobile ? 0.15 : 0.25,
  };
};

export const calculatePositions = (isSmall, isMobile, isTablet) => {
  return {
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    chessPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [-5, -8, -10] : isMobile ? [-9, -8, -10] : isTablet ? [-11, -4, -10] : [-13, -10, -10],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-9, 2, 0],
    rubiksCubePosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [9, 2, 0],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

export const techStack = [
  "https://techstack-generator.vercel.app/js-icon.svg",
  "https://techstack-generator.vercel.app/ts-icon.svg",
  "https://techstack-generator.vercel.app/cpp-icon.svg",
  "https://techstack-generator.vercel.app/react-icon.svg",
  "https://techstack-generator.vercel.app/webpack-icon.svg",
  "https://techstack-generator.vercel.app/python-icon.svg",
  "https://techstack-generator.vercel.app/github-icon.svg",
  "https://techstack-generator.vercel.app/docker-icon.svg",
  "https://techstack-generator.vercel.app/mysql-icon.svg",
  "https://techstack-generator.vercel.app/prettier-icon.svg",
  "https://techstack-generator.vercel.app/eslint-icon.svg",
  "https://techstack-generator.vercel.app/aws-icon.svg",
];