import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { media } from '../utils/media'
import PropTypes from 'prop-types'

import StyledLink from './Link'

const Content = styled.section`width: 100%;`

const SideContainer = styled.ul`
  list-style: none;
  margin: 0;
  position: fixed;
`

const SideItem = styled.li`margin: 0;`

const SideHeader = styled.span`
  font-size: ${rhythm(1 / 2)};
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
`

const SideLink = styled.a`
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${rhythm(2 / 5)};

  &:hover {
    background: none;
    color: black;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: black;
    visibility: hidden;
    transform-origin: left;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`

const SideBar = ({ sections }) =>
  <SideContainer>
    <SideHeader>Contents</SideHeader>
    {sections &&
      sections.split(', ').map((section, array) =>
        <SideItem>
          <SideLink href={`#${section}`}>
            {section}
          </SideLink>
        </SideItem>
      )}
  </SideContainer>

SideBar.propTypes = {
  sections: PropTypes.string,
}

export default SideBar
