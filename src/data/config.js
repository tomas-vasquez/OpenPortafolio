module.exports = {
  defaultTitle: "Tomás Dev",
  defaultDescription:
    "portafolio de proyectos de un desarrollador o programador web en de bolivia",
  author: {
    name: `Tomás Vásquez`,
  },
  banner: {
    FirstName: "Tomás",
    MiddleName: "",
    LastName: "Vásquez",
    devDesc: "| Freelancer | Web Developer | Designer | Potterhead ",
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
    buttomText: "Más acerca de mí",
  },

  navbar: {
    links: [
      {
        title: "Inicio",
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
    portfolioHeading: "Proyectos",
  },
  about: {
    aboutHeading: "Acerca de mí",
    aboutDescription:
      "I'm Software Engineer, Bolivian with 3+ years of experience in web development. I’m currently the Vice President of student body at Emerging Technologies Research Lab(ETL) and a former Intern at RiseTech. I'm passionate about teaching machines how to think",
    picUrl: "https://github.com/tomasdetloging.png",
  },
  blog: {
    blogHeading: "Posts",
    blogButtomText: "Ver todos mis posts",
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
    contactMeTitle: "Contáctame",
    contactMeText:
      'Puedes enviarme un correo a la dirección: <a href="mailto:tomasdetloging@gmail.com">tomasdetloging@gmail.com</a><br /> o también puedes contactarme mediante mis redes sociales:',
  },
  footer: {
    locationTitle: "Mi ubicación",
    location: "Barrio Estacion Argentina  # 456 \n - Santa Cruz - Bolivia",
    socialLinksTitle: "Mis redes",
    aboutTitle: "Acerca de Open-Portfolio",
    about: "Este portafolio es de código abierto... clona el repositorio:",
  },
  wathsappWidged: {
    buttoms: [
      {
        href: "https://www.twitter.com/_tomasvasquez_",
        tooltip: "Mi Twitter",
        style: {
          backgroundColor: "#17a2b8",
          color: "rgb(250, 250, 250)",
        },
        icon: "twitter",
      },
      {
        href: "mailto:tomasdetloging@gmail.com",
        tooltip: "Enviar correo",
        style: {
          backgroundColor: "#117a8b",
          color: "rgb(250, 250, 250)",
        },
        icon: "gmail",
      },
      {
        href: "https://api.whatsapp.com/send?phone=59177649384",
        tooltip: "Enviar mensage",
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
