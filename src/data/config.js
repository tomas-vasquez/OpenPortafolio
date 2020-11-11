module.exports = {
  defaultTitle: "tomas_dev",
  defaultDescription:
    "portafolio de projectos de un desarrollador o programador web en de bolivia",
  author: {
    name: `Tomás Vásquez`,
  },
  banner: {
    FirstName: "Tomás",
    MiddleName: "",
    LastName: "Vásquez",
    devDesc: "| Freelancer | Web Developer | Designer | Vimlover ",
    icons: [
      {
        id: 0,
        icon: "github",
        url: "https://github.com/tomasdetloging",
      },
      // {
      //   id: 1,
      //   icon: "youtube",
      //   url: "https://www.facebook.com/tomasdetloging",
      // },
      {
        id: 2,
        icon: "linkedin",
        url: "https://www.linkedin.com/in/tomás-vásquez-8a45471b4",
      },
      // {
      //   id: 3,
      //   icon: "instagram",
      //   url: "https://www.instagram.com/tomasdetloging/",
      // },
      {
        id: 4,
        icon: "wathsapp",
        url: "https://api.whatsapp.com/send?phone=59177649384",
      },
      {
        id: 6,
        icon: "twitter",
        url: "https://www.twitter.com/_tomasvasquez_",
      },
      {
        id: 5,
        icon: "gmail",
        url: "mailto:tomasdetloging@gmail.com",
      },
    ],
    buttomText: "More about me",
  },

  navbar: {
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        icon: "github",
        title: "",
        href: "https://github.com/tomasdetloging",
      },
    ],
  },

  portfolio: {
    portfolioHeading: "projects",
    portfolioButtomText: "See all",

    portfolioHeading2: "repositories",
    portfolioButtomText2: "See all",

    linkGitHub: "https://github.com/tomasdetloging",

    deploys: [
      {
        title: 'Open Academy "CRA"',
        image: "capture (4)",
        linkRepo: "https://github.com/tomasdetloging/OpenAcademy-ReactApp",
        linkDemo: "https://open-academy-react-app.vercel.app/",
      },

      {
        title: "Open Social Network",
        image: "capture (7)",
        linkRepo: "https://github.com/tomasdetloging/social-network-v123",
        linkDemo: "https://social-network-v123.vercel.app/",
      },
      {
        title: "Open Portafolio",
        image: "capture (2)",
        linkRepo: "https://github.com/tomasdetloging/OpenPortafolio",
        linkDemo: "",
      },
      {
        title: "Open Trello",
        image: "capture (1)",
        linkRepo: "https://github.com/tomasdetloging/OpenTrello",
        linkDemo: "https://open-trello.vercel.app/",
      },
      {
        title: "Particle image example",
        image: "capture (3)",
        linkRepo: "https://github.com/tomasdetloging/",
        linkDemo: "https://particle-effect.vercel.app/",
      },

      {
        title: 'Open Academy "NextJs"',
        image: "capture (5)",
        linkRepo: "https://github.com/tomasdetloging/openacademy-nextjs",
        linkDemo: "https://open-academy.vercel.app/",
      },
      {
        title: "Youtube Clone",
        image: "capture (6)",
        linkRepo: "https://github.com/tomasdetloging/Youtube-Clone",
        linkDemo: "https://youtube-clone-inky.vercel.app/",
      },

      {
        title: "Simple Crud Postgres",
        image: "capture (8)",
        linkRepo: "https://github.com/tomasdetloging/simple-crud-postgre",
        linkDemo: "https://simple-crud-postgree.herokuapp.com/",
      },
    ],
  },
  about: {
    aboutHeading: "About me",
    aboutDescription:
      "My name is Tomás Vásquez and I am specialized in the development and programming of web applications. I began my academic training at the university studying Computer Science and later studying self-taught in online education platforms, first in EDteam and then in Platzi, which helped me to get work remotely and eventually in companies like NetSoft, NullCode, Team and many more. At this time I feel that the time has come to change of scene and carry out a new work experience. Without a doubt, I believe that your company is the perfect one to achieve it.",
    picUrl: "https://github.com/tomasdetloging.png",
    aboutMeButtomText: "See my CV",
  },
  blog: {
    blogHeading: "Posts",
    blogButtomText: "See all posts",
  },
  skills: {
    skillsHeading: "Skills",
    mySkills: [
      {
        name: "javascript",
        value: 90,
        icon: "js",
        color: "orange",
      },
      {
        name: "nodejs",
        value: 90,
        icon: "node",
        color: "green",
      },
      { name: "React", value: 90, icon: "react", color: "#3992e6" },
      {
        name: "Angular",
        value: 80,
        icon: "angular",
        color: "#d81010",
      },
      { name: "Vue", value: 60, icon: "vuejs", color: "green" },
      {
        name: "bootstrap",
        value: 95,
        icon: "bootstrap",
        color: "#6d0c6d",
      },
    ],
  },

  contactMe: {
    contactMeTitle: "Contact me",
    contactMeText:
      'You can send me an email to the address: <a href="mailto:tomasdetloging@gmail.com">tomasdetloging@gmail.com</a><br /> or you can also contact me through my social networks:',
  },
  footer: {
    locationTitle: "My location",
    location:
      "Neighborhood Estación Argentina  # 456 \n - Santa Cruz - Bolivia",
    socialLinksTitle: "My social networks",
    aboutTitle: "About Open-Portfolio",
    about:
      'This portfolio is open source... clone the repository: <a href="https://github.com/tomasdetloging/OpenPortafolio">open-portafolio</a>',
  },
  wathsappWidged: {
    buttoms: [
      {
        href: "https://www.twitter.com/_tomasvasquez_",
        tooltip: "My Twitter",
        style: {
          backgroundColor: "#17a2b8",
          color: "rgb(250, 250, 250)",
        },
        icon: "twitter",
      },
      {
        href: "mailto:tomasdetloging@gmail.com",
        tooltip: "Send email",
        style: {
          backgroundColor: "#117a8b",
          color: "rgb(250, 250, 250)",
        },
        icon: "gmail",
      },
      {
        href: "https://api.whatsapp.com/send?phone=59177649384",
        tooltip: "Send message",
        style: {
          backgroundColor: "#28a745",
          color: "rgb(250, 250, 250)",
        },
        className: " fa-2x",
        icon: "wathsapp",
      },
    ],
  },
};
