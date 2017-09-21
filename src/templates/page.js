import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { media } from '../utils/media'
import Helmet from 'react-helmet'

const Container = styled.section``

const Content = styled.div`
  width: 100%;
  margin: 0;
  ${media.desktop`
    margin-left: 20%;
    width: 80%;
  `};
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <section>
      <Helmet title={`James Chu - ${post.frontmatter.title}`} />
      <h1>
        {post.frontmatter.title}
      </h1>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </section>
  )
}

export const query = graphql`
  query RegularPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
