const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const projectTemplate = path.resolve(`./src/templates/project.js`)
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {

      const posts = result.data.allMarkdownRemark.edges;

      posts.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: projectTemplate,
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    const slug = `/${parsedFilePath.dir}/`;
    const img = `/images/${parsedFilePath.dir}.png`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `img`,
      value: img,
    })
  }
}
