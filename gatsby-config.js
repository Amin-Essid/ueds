// const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ueds",
  },
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-sass",
    //   options: {
    //     sassOptions: {
    //       data: `@import "core.scss";`,
    //       includePaths: [path.resolve(__dirname, "src/style")],
    //     },
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Poppins`, `Roboto`],
        display: "swap",
        // display: "block",
      },
    },
  ],
};
