import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

const TagsList = styled.div`text-transform: uppercase;`

const WorkTags = ({ tags }) =>
  <TagsList>
    {tags}
  </TagsList>

export default WorkTags
