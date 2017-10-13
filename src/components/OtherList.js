import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import { media } from '../utils/media'

const ListContainer = styled.section`
  margin: 0 0 ${rhythm(1)} 0;
  text-align: center;
  width: 100%;
  ${media.desktop`
    text-align: left;
    width: 48%;
  `};

  &:nth-child(odd) {
    ${media.desktop`
      margin: 0;
    `};
  }
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
`

const ImageContainer = styled.div`
  width: 100%;
  height: ${rhythm(8)};
  margin: 0 0 ${rhythm(3 / 4)} 0;
  overflow: hidden;

  &:hover ${ListImage} {
    transform: scale(1.05);
  }
`

const OtherList = ({ title, linkTo, tags, img }) =>
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

export default OtherList
