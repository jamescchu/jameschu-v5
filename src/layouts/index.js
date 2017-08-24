import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () =>
  <div>
    <div>
      <h1>
        <Link to="/">Gatsby</Link>
      </h1>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
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
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
