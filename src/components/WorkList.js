import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import { media } from '../utils/media'

const ListContainer = styled.section`
  margin: 0 auto ${rhythm(2)} auto;
  text-align: center;
  ${media.desktop`
    text-align: left;
    max-width: ${rhythm(30)};
  `};
  ${media.giant`
    max-width: ${rhythm(40)};
  `};
`

const ListTags = styled.div`
  text-transform: uppercase;
  font-size: ${rhythm(2 / 5)};
`

const ListImage = styled.div`
  background-image: url('${props => props.img}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;

  /* shadow hover - replaced by scale hover
  &::after {
    content: '';
    height: 100%;
    display: block;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.80);
    opacity: 0;
    transition: opacity 0.3s ease;
    will-change: box-shadow;
  }

  &:hover::after {
    opacity: 1;
  }
  */
`

const ImageContainer = styled.div`
  width: 100%;
  height: ${rhythm(8)};
  margin: 0 0 ${rhythm(3 / 4)} 0;
  overflow: hidden;

  &:hover ${ListImage} {
    transform: scale(1.05);
  }
  ${media.tablet`
    height: ${rhythm(14)};
  `};
  ${media.desktop`
    height: ${rhythm(16)};
  `};
  ${media.giant`
    height: ${rhythm(18)};
  `};
`

const WorkList = ({ title, linkTo, tags, img }) =>
  <ListContainer>
    <Link to={linkTo}>
      <ImageContainer>
        <ListImage img={img} />
      </ImageContainer>
      <ListTags>
        {tags}
      </ListTags>
      <h2>
        {title}
      </h2>
    </Link>
  </ListContainer>

export default WorkList
