import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'

export default styled(Link)`
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
