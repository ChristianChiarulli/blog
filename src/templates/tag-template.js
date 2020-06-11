import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import Post from "../components/post"

const Tags = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  const { tag } = pageContext
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        Topic: <span style={{ color: "#61afef" }}>{tag}</span>
      </h1>
      {posts.map(({ node }) => (
        <Post
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          slug={node.fields.slug}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default Tags

export const TagListQuery = graphql`
  query TagListQuery($skip: Int!, $limit: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          frontmatter {
            author
            date(formatString: "MMMM Do YYYY")
            title
            tags
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
        }
      }
    }
  }
`
