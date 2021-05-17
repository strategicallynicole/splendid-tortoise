module.exports = {
  siteMetadata: {
    title: `Seerist`,
    description: ``,
    author: `OAKwave`,
  },
  siteMetadata: {
    siteUrl: `https://www.seerist.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,

    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: './src',
        aliases: {
          assets: "./assets",
          components: "./components",
          sections: "./sections",
          reusecore: "./reusecore",
          theme: "./theme",
        },
      },
    },
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        // this is the path to your routes configuration file
        path: `${__dirname}/_data/routes.js`,
      },
    },
   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0A0015`,
        theme_color: `#5235DD`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
