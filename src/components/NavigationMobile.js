import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import { media } from '../utils/media'

const NavBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${rhythm(2.5)};
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.80);
  ${media.desktop`
    display: none;
  `};
`
const activeClassName = `nav-active`
const NavLink = styled(Link).attrs({
  activeClassName,
})`
  display: block;
  padding-top: ${rhythm(1 / 2)};
  height: 100%;
  width: ${rhythm(3)};
  text-align: center;
  
  opacity: 0.5;
  &.${activeClassName} {
   opacity: 1;
 }
`

const NavAnchor = styled.a`
  display: block;
  padding-top: ${rhythm(1 / 2)};
  height: 100%;
`

const NavItem = styled.div`
  height: ${rhythm(3 / 4)};
  width: ${rhythm(3 / 4)};
  border-radius: ${rhythm(1 / 8)};
  margin: auto;
  background: black;
`

const TriangleIcon = () =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path d="M329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.9 0 60-40 41.6-72l-240-416z" />
  </svg>

const NavLabel = styled.label`
  font-size: ${rhythm(1 / 2)};
  color: black;
`

const NavSquare = NavItem.extend``

const NavTriangle = NavItem.extend`
  background: none;
  width: ${rhythm(4 / 5)};

  & svg {
    fill: black;
  }
`

const NavCircle = NavItem.extend`border-radius: ${rhythm(3 / 4)};`

const NavigationMobile = ({}) =>
  <NavBar>
    <NavLink exact activeClassName={activeClassName} to="/">
      <NavSquare />
      <NavLabel>Work</NavLabel>
    </NavLink>
    <NavLink exact activeClassName={activeClassName} to="/other">
      <NavCircle />
      <NavLabel>Other</NavLabel>
    </NavLink>
    <NavLink exact activeClassName={activeClassName} to="/about">
      <NavTriangle>
        <TriangleIcon />
      </NavTriangle>
      <NavLabel>About</NavLabel>
    </NavLink>
  </NavBar>

export default NavigationMobile
