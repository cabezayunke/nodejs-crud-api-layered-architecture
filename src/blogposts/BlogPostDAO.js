const BlogPostModel = require('./BlogPostModel')

const BlogPostDAO = {
  getBlogPost: async (id) => BlogPostModel.findById(id),
  createBlogPost: async (blogPost) => new BlogPostModel(blogPost),
  updateBlogPost: async (id, blogPost) => BlogPostModel.findByIdAndUpdate(id, blogPost, { new: true }),
  deleteBlogPost: async (id) => BlogPostModel.findById(id).remove(),
}
module.exports = BlogPostDAO
