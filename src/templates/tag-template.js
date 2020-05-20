import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody } from "reactstrap"
import Img from "gatsby-image"
import style from "../components/post-list.module.less"
import { slugify } from "../../utils/Utilities"
import Pager from "../components/pager"

const Tags = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { tag } = pageContext
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "-80px" }}>
        Topic: <span style={{ color: "#61afef" }}>{tag}</span>
      </h1>
      {posts.map(({ node }, i) => {
        return (
          <Card className={style.card}>
            <CardBody>
              <div key={node.title} className={style.post}>
                <div className={style.cover}>
                  <Link to={node.fields.slug} key={i}>
                    <Img
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      title={node.excerpt}
                      alt={node.title}
                    />
                  </Link>
                </div>
                <Link to={node.fields.slug} key={i}>
                  <div className={style.content}>
                    <h2>{node.frontmatter.title}</h2>
                    <label>by: {node.frontmatter.author}, </label>
                    {node.frontmatter.date ? (
                      <label>{node.frontmatter.date}</label>
                    ) : null}
                    <p>{node.excerpt}</p>
                  </div>
                </Link>
              </div>
            </CardBody>
          </Card>
        )
      })}
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query TagsQuery($tag: String!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          frontmatter {
            author
            date(formatString: "MMMM Do YYYY")
            title
            image {
              childImageSharp {
                resize(width: 100, height: 200) {
                  src
                }
                fluid(maxWidth: 286) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
