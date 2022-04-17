module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {
        website: {
        },
        contentDir: "content",
        assetDir: "static",
      },
    },
  ],
};
