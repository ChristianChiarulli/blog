import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import Pager from "../components/pager"
import { graphql } from "gatsby"

const postList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Articles</h1>
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

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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

export default postList
