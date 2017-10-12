import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { media } from '../utils/media'
import Helmet from 'react-helmet'

import SideBarList from '../components/SideBarList'
import PostInfo from '../components/PostInfo'

const Container = styled.section``

const SideBar = styled.div`
  display: none;
  ${media.desktop`
    display: block;
    width: 20%;
    float: left;
  `};
  ${media.giant`
    display: block;
    width: 10%;
    float: left;
  `};
`

const Content = styled.div`
  width: 100%;
  margin: 0;
  ${media.desktop`
    margin-left: 10%;
    width: 90%;
  `};
  ${media.giant`
    margin-left: 20%;
    width: 80%;
  `};
`

export default ({ data }) => {
  const post = data.markdownRemark
  const showSideBar = post.frontmatter.side
  const showInfo = post.frontmatter.info
  return (
    <section>
      <Helmet title={`James Chu - ${post.frontmatter.title}`} />
      <h1>
        {post.frontmatter.title}
      </h1>
      { showSideBar &&
        <SideBar>
          <SideBarList sections={post.frontmatter.sections} />
        </SideBar>
      }
      <Content>
        { showInfo &&
          <PostInfo
            project={post.frontmatter.title}
            role={post.frontmatter.role}
            date={post.frontmatter.time}
            description={post.frontmatter.description}
            website={post.frontmatter.website}
            client={post.frontmatter.client}
            team={post.frontmatter.team}
            awards={post.frontmatter.awards}
          />
        }
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </section>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        sections
        role
        time
        website
        team
        client
        awards
        info
        side
      }
    }
  }
`
