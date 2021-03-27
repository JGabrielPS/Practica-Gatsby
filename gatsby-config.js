/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Práctica de Gatsby",
    description: "Proyecto de práctica del framework Gatsby",
    author: "@JGabrielPS",
    data: ["item1", "item2"],
    person: { name: "Juan", age: 30 },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
