import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { media } from '../utils/media'

const activeClassName = `nav-active`
const ContentContainer = styled.main.attrs({
  activeClassName,
})`
  max-width: initial;
  margin: 0 ${props => (props.isRoot ? 'auto' : rhythm(1))};
  ${media.desktop`
    max-width: ${rhythm(35)};
    margin: auto;
  `};
  ${media.giant`
    max-width: ${rhythm(40)};
    margin: auto;
  `};
`

const Content = ({ children, Footer, ...rest }) =>
  <ContentContainer {...rest}>
    {children}
    {Footer && <Footer />}
  </ContentContainer>

export default Content
