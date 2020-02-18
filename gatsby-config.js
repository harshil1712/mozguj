module.exports = {
  siteMetadata:{
    title: "Mozilla Gujarat",
    description: "A highlt enthusiastic community of Mozilla lovers in Gujarat, India. We love the web",
    author: "Mozilla Gujarat Community"
  },
    plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/assets/`,
        },
      },
    ],
  }