const App = require('./common/App')
const MongoConnection = require('./common/MongoConnection')
const Logger = require('./common/Logger')
const BlogPostRouter = require('./blogposts/BlogPostRouter')

// db connection
MongoConnection.create(require('../config/database'))

// create app
const app = App(BlogPostRouter)
app.listen(3000, () => {
  Logger.info('App listining on port 3000', { tags: 'init' })
})
