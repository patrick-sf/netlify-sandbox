import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-react-sandbox`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // @TODO: Add "gatsby-plugin-google-gtag" later and set it up
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-dts-css-modules',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@/app': 'src/app',
          '@/ui/templates': 'src/ui/templates',
          '@/ui/components': 'src/ui/components',
          '@/hooks': 'src/hooks',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
  ],
};

export default config;
