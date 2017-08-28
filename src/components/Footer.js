import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { media } from '../utils/media'

const Foot = styled.footer`
  text-transform: uppercase;
  text-align: center;
  font-size: ${rhythm(2/5)};
  margin: auto;
  ${media.desktop`
    text-align: left;
  `};
`
const SiteFooter = () =>
  <Foot>
    &copy; Designed and developed by James Chu
  </Foot>


export default SiteFooter
