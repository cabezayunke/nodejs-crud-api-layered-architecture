const BlogPostDAO = require('./BlogPostDAO')
const ApiError = require('../common/ApiError')

const getBlogPost = async (id) => {
  // some logic here
  const blogPost = await BlogPostDAO.getBlogPost(id)
  if(!blogPost) {
    throw ApiError.notFound('Blog post not found')
  }
  // more logic here
  return blogPost
}

const BlogPostService = {
  getBlogPost,
  createBlogPost: async (data) => {
    // some logic here
    const blogPost = await BlogPostDAO.createBlogPost(data)
    if(!blogPost) {
      throw ApiError.internal('Blog post could not be created')
    }
    // more logic here
    return blogPost
  },
  updateBlogPost: async ({ id, title, body }) => {
    // some logic here
    const blogPost = await BlogPostDAO.updateBlogPost(id, { title, body })
    if(!blogPost) {
      throw ApiError.notFound('Blog post not found')
    }
    // more logic here
    return blogPost
  },
  deleteBlogPost: async (id) => {
    await getBlogPost(id)
    await BlogPostDAO.deleteBlogPost(id)
  }
}
module.exports = BlogPostService
