import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import style from "./tag-list.module.less"
import { useStaticQuery, graphql } from "gatsby"

const TagList = () => {
  const data = useStaticQuery(graphql`
    query TagQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <div className={style.tags}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return <p>{[...new Set(node.frontmatter.tags)]}</p>
      })}
    </div>
  )
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TagList
