/**
 * Created by lonelydawn on 2018-04-10.
 */

const app = new (require('koa'))
const route = require('koa-route')
const serve = require("koa-static")
const sendfile = require("koa-sendfile")
const compress = require('koa-compress')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require("path")

// middlewares
app.use(bodyparser())
app.use(json())
app.use(logger())
app.use(compress())
app.use(serve(path.join(__dirname, "dist")))

// entry file
app.use(route.get('/*', function * () {
  yield * sendfile.call(this, path.join(__dirname, 'dist/index.html'))
}))

// serve port
app.listen(3000)
console.log("listening at port 3000!")

module.exports = app
