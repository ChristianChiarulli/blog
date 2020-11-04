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

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
  `)

  const blogTemplate = path.resolve("./src/templates/blog-post.jsx")
  const tagsTemplate = path.resolve("./src/templates/tag-template.jsx")
  const posts = result.data.allMarkdownRemark.edges
  const postList = path.resolve("./src/templates/post-list.jsx")

  const { paginate } = require("gatsby-awesome-pagination")

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 10,
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

  allTags.forEach(async (tag, index) => {
    const tagposts = await graphql(`
      {
        allMarkdownRemark(filter: { frontmatter: { tags: { eq: "${tag}" } } }) {
          edges {
            node {
              id
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `)
    const tagpostsEntries = tagposts.data.allMarkdownRemark.edges
    paginate({
      createPage,
      items: tagpostsEntries,
      itemsPerPage: 10,
      pathPrefix: `/${_.kebabCase(tag)}`,
      component: tagsTemplate,
      context: {
        tag,
      },
    })
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
}
