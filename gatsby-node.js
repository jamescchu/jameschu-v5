const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const projectTemplate = path.resolve(`./src/templates/project.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                type
              }
            }
          }
        }
      }
    `).then(result => {

      const posts = result.data.allMarkdownRemark.edges;

      posts.map(({ node }) => {
        if (node.frontmatter.type === "project" ) {
          createPage({
            path: node.fields.slug,
            component: projectTemplate,
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        } else {
          createPage({
            path: node.fields.slug,
            component: pageTemplate,
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        }
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
