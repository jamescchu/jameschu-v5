import React from 'react'
import Link from 'gatsby-link'

import OtherList from '../components/OtherList'

import styled from 'styled-components'

const OtherGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
`

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <OtherGrid>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <OtherList
              title={post.frontmatter.title}
              linkTo={post.fields.slug}
              tags={post.frontmatter.tags}
              img={post.fields.img}
            />
          )
        })}
    </OtherGrid>
  )
}

export const pageQuery = graphql`
  query OtherQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "other" }, draft: { ne: true } } }
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
