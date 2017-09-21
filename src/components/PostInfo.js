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

const Header = styled.span`
  display: inline;
  font-size: ${rhythm(1 / 2)};
  font-weight: bold;
  width: ${rhythm(4)};
  margin: 0;
  float: left;
`

const List = styled.li`
  font-size: ${rhythm(1 / 2)};
  width: 100%;
  margin: 0;
`

const Item = styled.span`
  display: block;
  padding-left: ${rhythm(4)};
`

const PostInfo = ({
  project,
  role,
  date,
  website,
  description,
  client,
  team,
  awards,
}) =>
  <Intro>
    {project != 'na' &&
      <List>
        <Header>
          Project:
        </Header>
        <Item>
          {project}
        </Item>
      </List>}
    {client != 'na' &&
      <List>
        <Header>
          For:
        </Header>
        <Item>
          {client}
        </Item>
      </List>}
    {team != 'na' &&
      <List>
        <Header>
          Team:
        </Header>
        <Item>
          {team}
        </Item>
      </List>}
    {role != 'na' &&
      <List header="Role:">
        <Header>
          Role:
        </Header>
        <Item>
          {role}
        </Item>
      </List>}
    {date != 'na' &&
      <List>
        <Header>
          Date:
        </Header>
        <Item>
          {date}
        </Item>
      </List>}
    {website != 'na' &&
      <List>
        <Header>
          Website:
        </Header>
        <Item>
          <Link to="{website}">
            {website}
          </Link>
        </Item>
      </List>}
    {awards != 'na' &&
      <List>
        <Header>
          Recognition:
        </Header>
        <Item>
          {awards}
        </Item>
      </List>}
  </Intro>

export default PostInfo
