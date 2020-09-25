module.exports = {
  siteMetadata: {
    title: `Desarrollador web en bolivia`,
    author: {
      name: `tomas vasquez`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://desarrollador-web-en-bolivia/`,
    social: {
      twitter: `tomasdetloging`,
    },
    banner: {
      FirstName: "Tomás",
      MiddleName: "",
      LastName: "Vásquez",
      devDesc:
        "| Programmer | Web Developer | Photographer | Artist | Potterhead ",
      icons: [
        {
          id: 0,
          image: "fa-github",
          url: "https://github.com/tomasdetloging",
        },
        {
          id: 356,
          image: "fa-youtube",
          url: "https://www.facebook.com/tomasdetloging",
        },
        // {
        //   id: 1,
        //   image: "fa-facebook",
        //   url: "https://www.facebook.com/tomasdetloging",
        // },
        {
          id: 3,
          image: "fa-linkedin",
          url: "https://www.linkedin.com/in/tomasdetloging/",
        },
        {
          id: 2,
          image: "fa-instagram",
          url: "https://www.instagram.com/tomasdetloging/",
        },
        {
          id: 4,
          image: "fa-twitter",
          url: "https://www.twitter.com/tomasdetloging/",
        },
      ],
    },
    about: {
      aboutHeading: "About Me",
      aboutDescription:
        "I'm Software Engineer, Bolivian with 3+ years of experience in web development. I’m currently the Vice President of student body at Emerging Technologies Research Lab(ETL) and a former Intern at RiseTech. I'm passionate about teaching machines how to think",
      picUrl: "https://github/tomasdetloging.png",
    },
    skills: {
      skillsHeading: "Skills",
      hardSkills: [
        { name: "React", value: 90, icon: "fab fa-react", color: "#3992e6" },
        {
          name: "Angular",
          value: 70,
          icon: "fab fa-angular",
          color: "#d81010",
        },
        { name: "Vue", value: 50, icon: "fab fa-vuejs", color: "green" },
        {
          name: "bootstrap",
          value: 90,
          icon: "fab fa-bootstrap",
          color: "violet",
        },
      ],
      softSkills: [
        { name: "timeliness", value: 60, icon: "fa fa-clock", color: "blue" },
        { name: "leaderess", value: 70, icon: "fa fa-user", color: "red" },
      ],
    },
    portfolio: {
      proyects: [
        { imgUrl: "portafolio.jpg", githubUrl: "git.ccom/dwe" },
        { imgUrl: "academy.jpg", githubUrl: "git.ccom/dwe" },
        { imgUrl: "academyAdmin.jpg", githubUrl: "git.ccom/dwe" },
      ],
    },
    footer: {
      location: "Barrio Estacion Argentina  # 456 \n - Santa Cruz - Bolivia",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
