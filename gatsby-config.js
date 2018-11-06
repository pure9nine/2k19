module.exports = {
  siteMetadata: {
    title: 'Gatsby & WP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'p9react.local',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        verboseOuput: true

      }
    }
  ],
}
