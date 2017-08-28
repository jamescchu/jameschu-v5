import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { media } from '../utils/media'

const Intro = styled.ul`
  margin: 0 0 ${rhythm(1)} 0;
  width: 100%;
  list-style: none;
`

const Header = styled.p`
  font-size: ${rhythm(1/2)};
  font-weight: bold;
  width: 10%;
  margin: 0;
  float: left;
`

const Item = styled.li`
  font-size: ${rhythm(1/2)};
  width: 50%;
  margin: 0;

  &::before {
    content: '${props => props.header }';
    font-size: ${rhythm(1/2)};
    font-weight: bold;
    width: 30%;
    margin: 0;
    float: left;
  }
`

const PostInfo = ({ project, role, date, website, description, client, team }) =>
  <Intro>
    { project!='na' &&
      <Item header='Project:'>
        {project}
      </Item>
    }
    { client!='na' &&
      <Item header='For:'>
        {client}
      </Item>
    }
    { team!='na' &&
      <Item header='Team:'>
        {team}
      </Item>
    }
    { role!='na' &&
      <Item header='Role:'>
        {role}
      </Item>
    }
    { date!='na' &&
      <Item header='Date:'>
        {date}
      </Item>
    }
    { website!='na' &&
      <Item header='Website:'>
        {website}
      </Item>
    }
  </Intro>

export default PostInfo
