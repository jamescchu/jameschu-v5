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
    font-size: ${rhythm(2 / 5)};
    text-transform: uppercase;
    margin: auto;
    padding: ${rhythm(1)} 0;
  `};
  ${media.giant`
    max-width: ${rhythm(40)};
    margin: auto;
  `};
`

const NavLink = styled(StyledLink)`
  &::before {
    visibility: ${props =>
      props.isRoot || props.isAbout ? 'visible' : 'hidden'};
    transform: ${props =>
      props.isRoot || props.isAbout ? 'scaleX(1)' : 'scaleX(0)'};
  }
`

const NavList = styled.li`
  margin: 0;
`

const NavSections = styled.ul`
  list-style: none;
  margin: 0;
  width: 50%;
`

const Navigation = ({ isRoot, isAbout }) =>
  <Nav>
    <NavSections>
      <NavList>
        <StyledLink to="/">James Chu</StyledLink>
      </NavList>
      <NavList>Product Designer</NavList>
    </NavSections>
    <NavSections>
      <NavList>
        <NavLink isRoot={isRoot} to="/">
          Work
        </NavLink>
      </NavList>
      <NavList>
        <NavLink isAbout={isAbout} to="/about">
          About
        </NavLink>
      </NavList>
      <NavList>
        <StyledLink to="/">Contact</StyledLink>
      </NavList>
    </NavSections>
  </Nav>

export default Navigation
