import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar'
import '../css/app.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: 'Chris Chiarull\'s Blog' }]}>
          <script src="https://kit.fontawesome.com/68097771c6.js" />
          <html lang="en" />
        </Helmet>
        <Navbar />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}>
          {children}
        </div>
      </>
    )}
  />
)

export default Layout
