import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import presets from '../utils/presets'
import { media } from '../utils/media'

const ListContainer = styled.div`
  margin: ${rhythm(1)} auto;
  max-width: ${rhythm(40)};
  text-align: center;
  background: red;
  ${media.desktop`background: dodgerblue;`};
`

const ListTags = styled.div`
  text-transform: uppercase;
  font-size: ${rhythm(1 / 3)};
`

const ListImage = styled.img`width: 100%;`

const WorkList = ({ title, linkTo, tags, img }) =>
  <ListContainer>
    <ListImage src={img} />
    <ListTags>
      {tags}
    </ListTags>
    <h2>
      {title}
    </h2>
  </ListContainer>

export default WorkList
