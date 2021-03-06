import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import NavigationMobile from '../components/NavigationMobile'
import Content from '../components/Content'

import '../css/base.css'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    const { children, location } = this.props

    const isRoot = location.pathname === '/'

    return (
      <div>
        <Helmet
          title="James Chu"
          meta={[
            {
              name: 'description',
              content: 'Selection of work by James Chu, product designer.',
            },
            {
              name: 'keywords',
              content:
                'James, Chu, product, designer, UX, user experience, design, jameschu, portfolio',
            },
          ]}
        />
        <Header />
        <Navigation />
        <Content isRoot={isRoot}>
          {children()}
        </Content>
        <NavigationMobile />
      </div>
    )
  }
}
