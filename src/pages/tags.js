import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./tags.module.less"

function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group

  return (
    <Layout>
      <SEO title="Tags" keywords={["chris@machine"]} />
      <h1 style={{ textAlign: "center" }}>All Topics</h1>
      <div className={style.container} style={userStyle}>
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
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
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
