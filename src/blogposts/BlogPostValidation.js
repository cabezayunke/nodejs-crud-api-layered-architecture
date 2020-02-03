const Joi = require('joi')

const mandatoryBlogPostId = Joi.object({
  id: Joi.string().required(),
})
const mandatoryBlogPostFields = Joi.object({
  title: Joi.string().required().min(10),
  body: Joi.string().required(),
})
const BlogPostValidation = {
  mandatoryBlogPostId,
  mandatoryBlogPostFields,
}
module.exports = BlogPostValidation
