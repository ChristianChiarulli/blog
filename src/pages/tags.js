import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../css/app.css'
// import './post.css'

function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group

  return (
    <Layout>
      <h1>All Topics</h1>
      <div style={userStyle}>
        {data.map(tag => (
          <Link to={`/${tag.fieldValue}`} className=" my-1 card text-center">
            <h2>
              {tag.fieldValue} {`(${tag.totalCount})`}
            </h2>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
