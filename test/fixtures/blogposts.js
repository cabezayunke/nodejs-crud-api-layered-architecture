const BlogPostModel = require('../../src/blogposts/BlogPostModel')

module.exports = {
  blogPostsUp: async () => {
      const blogPost = new BlogPostModel({
        title: 'example blog post',
        body: 'example blog post body yay!'
      })
      await blogPost.save()
      return {
        blogPost,
      }
  },
  blogPostsDown: async () => {
    return BlogPostModel.remove({})
  },
}
