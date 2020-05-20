// create a file path
const { slugify } = require("./utils/Utilities")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const path = require("path")

// Here we are adding a slug to the allMarkdown remark query
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        const blogTemplate = path.resolve("./src/templates/blog-post.js")
        const tagsTemplate = path.resolve("./src/templates/tag-template.js")
        const posts = result.data.allMarkdownRemark.edges
        const postList = path.resolve("./src/templates/post-list.js")

        const { paginate } = require("gatsby-awesome-pagination")

        paginate({
          createPage,
          items: posts,
          itemsPerPage: 5,
          pathPrefix: "/blog",
          component: postList,
        })

        //All tags
        let allTags = []
        // Iterate through each post, putting all found tags into `allTags array`
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            allTags = allTags.concat(edge.node.frontmatter.tags)
          }
        })
        // Eliminate duplicate tags
        allTags = _.uniq(allTags)

        allTags.forEach((tag, index) => {
          paginate({
            createPage,
            items: posts,
            itemsPerPage: 5,
            pathPrefix: `/${_.kebabCase(tag)}`,
            component: tagsTemplate,
            context: {
              tag,
            },
          })
          // createPage({
          //   path: `/${_.kebabCase(tag)}/`,
          //   component: tagsTemplate,
          //   context: {
          //     tag,
          //   },
          // })
        })

        posts.forEach(({ node }, index) => {
          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              slug: node.fields.slug,
              prev: index === 0 ? null : posts[index - 1],
              next: index === result.length - 1 ? null : posts[index + 1],
            }, // additional data can be passed via context
          })
        })
        return
      })
    )
  })
}
