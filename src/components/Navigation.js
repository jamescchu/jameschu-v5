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
    max-width: ${rhythm(35)};
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
const activeClassName = btoa(Math.random())
const NavLink = styled(StyledLink).attrs({
   activeClassName
 })`
  &::before {
    visibility: hidden;
    transform: scaleX(0);
  }
  &.${activeClassName}:before {
   visibility: visible;
   transform: scaleX(1);
 }
`

const NavList = styled.li`margin: 0;`

const NavSections = styled.ul`
  list-style: none;
  margin: 0;
  width: 50%;
`

const NavLogo = NavSections.extend`
  ${media.desktop`
    visibility: hidden;
  `};
  ${media.giant`
    visibility: visible;
  `};
`

const Navigation = ({}) =>
  <Nav>
    <NavLogo>
      <NavList>
        <StyledLink exact activeClassName={activeClassName} to="/">James Chu</StyledLink>
      </NavList>
      <NavList>Product Designer</NavList>
    </NavLogo>
    <NavSections>
      <NavList>
        <NavLink exact activeClassName={activeClassName} to="/">
          Work
        </NavLink>
      </NavList>
      <NavList>
        <NavLink exact activeClassName={activeClassName} to="/other">
          Other
        </NavLink>
      </NavList>
      <NavList>
        <NavLink exact activeClassName={activeClassName} to="/about">
          About
        </NavLink>
      </NavList>
    </NavSections>
  </Nav>

export default Navigation
