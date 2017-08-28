import React from 'react'
import Link from 'gatsby-link'

import WorkList from '../components/WorkList'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <WorkList
              title={post.frontmatter.title}
              linkTo={post.fields.slug}
              tags={post.frontmatter.tags}
              img={post.fields.img}
            />
          )
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            img
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`
