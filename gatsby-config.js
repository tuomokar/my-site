const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Tuomo Oila',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/page-text-container.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
  ],
}
