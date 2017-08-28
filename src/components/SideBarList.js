import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { media } from '../utils/media'
import PropTypes from 'prop-types'

import StyledLink from './Link'

const Content = styled.section`
  width: 100%;
`

const SideContainer = styled.ul`
  list-style: none;
  margin: 0;
`

const SideItem = styled.li`
  margin: 0;
`

const SideHeader = styled.span`
  font-size: ${rhythm(1/2)};
  text-transform: uppercase;
  color: rgba(0,0,0,0.5);
`

const SideBar = ({ sections }) =>
  <SideContainer>
    <SideHeader>
      Contents
    </SideHeader>
    {sections &&
      sections.split(', ').map((section, array) =>
        <SideItem>
          <StyledLink to={`#${section}`}>
            {section}
          </StyledLink>
        </SideItem>
    )}
  </SideContainer>

SideBar.propTypes = {
  sections: PropTypes.string
};

export default SideBar
