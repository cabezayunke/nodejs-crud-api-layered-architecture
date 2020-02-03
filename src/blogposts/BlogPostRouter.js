const Koa2JoiValidate = require('koa2-joi-validate')
const Router = require('koa-router')
const { useController } = require('../common/ControllerUtils')
const BlogPostValidation = require('./BlogPostValidation')
const BlogPostService = require('./BlogPostService')

const validator = Koa2JoiValidate({ passError: true })
const router = new Router({ prefix: '/api/v1/blogposts' })

// create routes
const getBlogPost = ({ data: { id }}) => BlogPostService.getBlogPost(id)
router.get(
  '/:id',
  validator.params(BlogPostValidation.mandatoryBlogPostId),
  (context) => useController(context,  getBlogPost)
)
const createBlogPost = ({ data }) => BlogPostService.createBlogPost(data)
router.post(
  '/',
  validator.body(BlogPostValidation.mandatoryBlogPostFields),
  (context) => useController(context, createBlogPost)
)
const updateBlogPost = ({ data }) => BlogPostService.updateBlogPost(data)
router.put(
  '/:id',
  validator.params(BlogPostValidation.mandatoryBlogPostId),
  validator.body(BlogPostValidation.mandatoryBlogPostFields),
  (context) => useController(context, updateBlogPost)
)
const deleteBlogPost = async ({ data: { id }}) => {
  await BlogPostService.deleteBlogPost(id)
  return { status: 204 }
}
router.delete(
  '/:id',
  validator.params(BlogPostValidation.mandatoryBlogPostId),
  (context) => useController(context, deleteBlogPost)
)

module.exports = router
