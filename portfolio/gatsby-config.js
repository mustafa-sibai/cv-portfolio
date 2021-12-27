module.exports = {
  siteMetadata: {
    siteUrl: "https://m-sibai.com",
    title: `Mustafa Sibai Portfolio`,
    description: `Mustafa Sibai Engine Programmer and Game Developer Portfolio`,
    author: `@Mustafa Sibai`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "55",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
