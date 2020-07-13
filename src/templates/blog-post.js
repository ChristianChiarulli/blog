import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PostPager from "../components/post-pager"
import style from "./blog-post.module.less"
import "katex/dist/katex.min.css"
import "../style/prism-darcula.less"
import GitalkComponent from "gitalk/dist/gitalk-component"

function BlogPost(props) {
  const { title, image, tags } = props.data.markdownRemark.frontmatter
  const { prev, next } = props.pageContext
  return (
    <Layout>
      <div>
        {image && (
          <Img
            style={{ backgroundColor: "#1e2127" }}
            fluid={image.childImageSharp.fluid}
          />
        )}
        <h1 style={{ backgroundColor: "#1e2127", textAlign: "left" }}>
          {title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          className={style.markdownBody}
        />
        <div className={style.markdownBody}>
          <br />
          <span>Tagged in </span>
          {tags.map((tag, i) => (
            <a href={`/${tag}`} key={i} style={{ marginLeft: "10px" }}>
              {tag}
            </a>
          ))}
        </div>
        {/* <Share title={title} url={url} pathname={props.location.pathname} /> */}
        <PostPager prev={prev && prev.node} next={next && next.node} />
        <GitalkComponent
          options={{
            clientID: "fbe3eb4cb8351d49fb9c",
            clientSecret: "7d0c29add206d5bc85fc78f27237b49b08e602d0",
            repo: "https://github.com/ChristianChiarulli/blog", // The repository of store comments,
            owner: "ChristianChiarulli",
            id: title,
            distractionFreeMode: false, // Facebook-like distraction free mode
          }}
        />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        tags
        image {
          childImageSharp {
            resize(width: 1000, height: 420) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

