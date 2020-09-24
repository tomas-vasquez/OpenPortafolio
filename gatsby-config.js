module.exports = {
  siteMetadata: {
    title: `desarrollador web en bolivia`,
    author: {
      name: `tomas vasquez`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://desarrolladorwebenbolivia/`,
    social: {
      twitter: `tomasdetloging`,
    },
    banner: {
      FirstName: "Tomás",
      MiddleName: "",
      LastName: "Vasquez",
      devDesc:
        "| Engineer | Programmer | Web Developer | Photographer | Athlete | Artist ",
      icons: [
        {
          id: 0,
          image: "fa-github",
          url: "https://github.com/hashirshoaeb",
          style: "socialicons",
        },
        {
          id: 1,
          image: "fa-facebook",
          url: "https://www.facebook.com/hashirshoaeb",
          style: "socialicons",
        },
        {
          id: 2,
          image: "fa-instagram",
          url: "https://www.instagram.com/hashirshoaeb/",
          style: "socialicons",
        },
        {
          id: 3,
          image: "fa-linkedin",
          url: "https://www.linkedin.com/in/hashirshoaeb/",
          style: "socialicons",
        },
        {
          id: 4,
          image: "fa-twitter",
          url: "https://www.twitter.com/hashirshoaeb/",
          style: "socialicons",
        },
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
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
