import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  kpmg,
  seneca,
  sdc,
  mjdm,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "hackathon-experience",
    title: "Competitions",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Data/Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "KPMG Canada",
    icon: kpmg,
    iconBg: "#383E56",
    date: "Upcoming Jan 2026 - Apr 2026",
    points: [
      "Contributed to full software development lifecycle by designing, developing, and maintaining high-quality, high-performance applications using frameworks such as React, Vue.js, Node.js, C#, and Python.",
      "Collaborated with cross-functional teams to draft functional specifications, implement best practices, perform code reviews, and write unit tests to ensure quality and maintainability.",
      "Gained hands-on experience with REST APIs, reusable component libraries, and both relational and non-relational databases including SQL, MySQL, and Cosmos DB.",
      "Demonstrated strong understanding of OOP principles, Git version control, and cloud technologies like Azure and SharePoint, with a passion for innovation, continuous learning, and delivering impactful solutions.",
    ],
  },
  {
    title: "Information Technology Specialist Intern",
    company_name: "Seneca Polytechnic",
    icon: seneca,
    iconBg: "#E6DEDD",
    date: "Apr 2025 - Aug 2025",
    points: [
      "Monitoring technical support and problem resolution for over 50 clients daily, troubleshooting innovation using Open-Source project, and network issues to diagnose and resolve infrastructure system-level challenges",
      "Managing and resolving service tickets, emails, live chats, and calls, ensuring timely and effective solutions, and escalating complex issues into technology and source control management.",
      "Communicating with technical support and computer engineering teams to optimize workflows, document procedures, and maintain accurate logs.",
      "Participating in case reviews and providing constructive feedback to other team-wokers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Software Developer Club @ Seneca Polytechnic",
    icon: sdc,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Provide an inclusive, collaborative and educational environment for students to explore and develop their software development skills.",
      "IDeveloping website by using TypeScript and React, fixing more than 3 tickets per day and managing to solving debugging issues.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer Freelancer",
    company_name: "MJDM",
    icon: mjdm,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Built scalable eCommerce platforms using React, JavaScript, Python, and AWS (EC2, S3), implementing CRUD operations and secure authentication.",
      "Designed event-driven workflows with SQS/SNS, enhancing system reliability through asynchronous processing.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fragments Microservices",
    description:
      "Developed a JavaScript and Node.js Software Development Life Cycle REST API system to enable seamless integration with various systems and devices, supporting CRUD operations on text and image fragments. Illustrated and implemented a scalable Infrastructure-as-Code and software as a service architecture on AWS using services like Logging Cognito, Lambda, DynamoDB, S3, EC2, Cognito, ECS, and ECR.",
    tags: [
      {
        name: "aws",
        color: "yellow-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "github",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },

  {
    name: "Podcastify",
    description:
      "A creative effort called Podcastify aims to transform the podcasting experience. React.js and TypeScript were used in its construction to provide a strong front-end, and a REST API backend was integrated for easy data maintenance. Reliable performance and scalable infrastructure are ensured by utilizing AWS cloud services. Specifically, Gemini AI technology improves recommendation and content creation, which makes Podcastify a state-of-the-art platform for listeners all over the world.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "convex AI",
        color: "green-text-gradient",
      },
      {
        name: "gemeni AI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gym Ecommerce",
    description:
      "Developed a replicated Eleiko platform using React.js and Next.js, enabling efficient and dynamic creation of user interfaces with NEXT.js to ensure a user-friendly experience and improve application functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
