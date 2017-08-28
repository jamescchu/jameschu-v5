import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import { media } from '../utils/media'
import StyledLink from './Link'

const Nav = styled.nav`
  display: none;
  ${media.desktop`
    display: flex;
    justify-content: space-between;
    max-width: ${rhythm(30)};
    font-size: ${rhythm(2/5)};
    text-transform: uppercase;
    margin: auto;
    padding: ${rhythm(1)} 0;
  `};
  ${media.giant`
    max-width: ${rhythm(40)};
    margin: auto;
  `};
`

const NavList = styled.li`
  margin: 0;
`

const NavSections = styled.ul`
  list-style: none;
  width: 50%;
  margin: 0;
`

const Navigation = () =>
  <Nav>
    <NavSections>
      <NavList>
        <StyledLink to="/">
          James Chu
        </StyledLink>
      </NavList>
      <NavList>
        Product Designer
      </NavList>
    </NavSections>
    <NavSections>
      <NavList>
        <StyledLink to="/">
          Work
        </StyledLink>
      </NavList>
      <NavList>
        <StyledLink to="/">
          About
        </StyledLink>
      </NavList>
      <NavList>
        <StyledLink to="/">
          Contact
        </StyledLink>
      </NavList>
    </NavSections>
  </Nav>

export default Navigation
