import {
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
  meta,
  starbucks,
  tesla,
  shopify,
  staples,
  ps,
  domo,
  by,
  carrent,
  jobit,
  tripguide,
  threejs,
  api,
  cloud,
  web_dev,
  mobile_dev,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Development",
    icon: web_dev,
  },
  {
    title: "Back-End API Development",
    icon: api,
  },
  {
    title: "Mobile Development",
    icon: mobile_dev,
  },
  {
    title: "Cloud and DevOps",
    icon: cloud,
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
    title: "Software Engineer III",
    company_name: "Staples US Retail",
    icon: staples,
    iconBg: "#383E56",
    date: "Jan 2023 – Present",
    points: [
      "Created a highly reliable API service in C# .NET Core to interact with Azure Blob Storage, ensuring optimal performance and data integrity.",
      "Developed and optimized RESTful APIs using C#, .NET 6.0, and ASP.NET Core, creating endpoints for retrieving design templates and attributes, which resulted in a 40% improvement in data retrieval efficiency and response formatting.",
      "Integrated Elastic Search and Redis, and configured application services, enhancing data storage and retrieval speed, while implementing caching strategies and HTTP client policies with Polly to increase system reliability and performance.",
      "Conducted unit tests and integration tests using xUnit, Moq, and NUnit, achieving 85% code coverage and ensuring high reliability and robustness of the API.",
      "Spearheaded front-end architecture initiatives, optimizing development flows and build systems using Vite/Webpack, and Babel, resulting in a 30% reduction in initial development time.",
      "Created a reusable React component library and hosted it as an npm package in a private Azure Artifact repository, accelerating development cycles by 60% and promoting code reusability across projects.",
      "Implemented efficient state management using Redux Toolkit and RTK Query, improving application performance and reducing API fetch times by 40%, enhancing overall user experience.",
      "Successfully migrated to Next.js, achieving a 20% performance boost, and integrated Bloomreach CMS, empowering agile content management and enhancing market readiness.",
      "Developed a Flutter Progressive Web Application (PWA) for coupon services, delivering native-like experiences and reducing development time by 60% across multiple devices.",
      "Deployed services on Azure using ARM Templates and CI/CD Pipeline, optimizing deployment processes. Utilized Azure ApplicationInsights for monitoring, actively participated in peer code reviews, and maintained comprehensive design documents for efficient knowledge transfer.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Domo Inc.",
    icon: domo,
    iconBg: "#383E56",
    date: "May 2022 – Aug 2022",
    points: [
      "Designed optimum tech solutions to solve business problems by producing conceptual and component-level architectures.",
      "Engineered web applications using Figma, TypeScript, Material UI, and React-Redux, achieving a 20% reduction in bug reports.",
      "Successfully migrated AngularJS application to easy-to-maintain JavaScript application and fixed vulnerability issues by avoiding data breaches and harmful redirects.",
    ],
  },
  {
    title: "Senior Technical Consultant",
    company_name: "Blue Yonder",
    icon: by,
    iconBg: "#383E56",
    date: "Aug 2020 – Aug 2021",
    points: [
      "Enhanced call center order capture efficiency by 10% using a web application leveraging advanced JavaScript frameworks optimizing user interaction and efficiency.",
      "Implemented code refactoring, enhancing code maintainability by 45% through rigorous adherence to Java best practices.",
      "Secured 5 new clients through the development of a demonstration application utilizing Shopify, jQuery, HTML, and JavaScript.",
    ],
  },
  {
    title: "Senior Associate Technology",
    company_name: "Publicis Sapient",
    icon: ps,
    iconBg: "#383E56",
    date: "Jul 2016 – Aug 2020",
    points: [
      "Led a team of four to deliver the OMS project on time, fulfilled the client-facing role to meet deadlines, and owned end-to-end OMS workflows.",
      "Developed REST APIs using Java, Spring Boot, Lombok, and GraphQL to onboard ten stores online in the India region, contributing to a 25% to 30% increase in customer sales.",
      "Implemented a store order management system using AngularJS, significantly improving store user experience. Developed a signature capture feature, storing as blob in the database and printing them on receipts, thereby enabling clients to deliver the best store user experience.",
      "Designed and developed invoicing, career integration, and financial transactions using the TDD approach by writing test cases leveraging Junit and Mockito.",
      "Implemented multi-threaded Java application using PL/SQL to transform and migrate millions of eCommerce orders from the legacy system and achieved 90% accurate order history in the new system.",
      "Enhanced security in the eCommerce website by developing dynamic web pages using HTML and JSP, implementing auto logout functionalities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "A Search Engine For Travel Planning",
    description:
      "Travel Made Easy is a search engine for travel planning for local places near Salt Lake City where users can query about the places.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Elastic Search",
        color: "green-text-gradient",
      },
      {
        name: "ASP .NET",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/snatarajappa/travel-made-easy",
  },
  {
    name: "Physically Based Rendering",
    description:
      "The project demonstrates realistic image synthesis to simulate light interactions with materials and environment.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "OpenGL",
        color: "green-text-gradient",
      },
      {
        name: "freeglut",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/snatarajappa/image-based-lighting",
  },
  {
    name: "ToDo App",
    description:
      "My ToDo App is a React and TypeScript-based application with Redux and Material UI for the frontend, and Domo Collections for the backend, enabling users to create, update, complete, delete, and search tasks efficiently.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/snatarajappa/todo-app",
  },
  {
    name: "Poster Designer",
    description:
      "Poster Designer allows users to create and customize posters by selecting tools from a sidebar, editing text and images, and managing elements through resize, move, and delete functionalities.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Canvas",
        color: "green-text-gradient",
      },
      {
        name: "Emotion",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/snatarajappa/poster-designer",
  },
  {
    name: "Bird Migration Data Visualization",
    description:
      "The project uses interactive visualizations to display bird migration data sourced from eBird and other datasets.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "D3",
        color: "green-text-gradient",
      },
      {
        name: "Esri",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/snatarajappa/dataviscourse-bird_migration",
  },
  {
    name: "GraphQL Server",
    description:
      "GraphQL Server is a backend service that provides a flexible and efficient API for querying and manipulating data through GraphQL.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/snatarajappa/graphql-server",
  },
  {
    name: "Inventory Service",
    description:
      "A Java and Spring Boot microservice for managing inventory within an Order Management System, integrated with Spring Cloud, Keycloak, Zipkin, ELK, and Grafana for enhanced monitoring and security.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Microservice",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
