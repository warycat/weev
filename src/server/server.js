import express from 'express'
import routes from './routes'
import qs from 'qs'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'

const PORT = process.env.PORT || 3000
const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server running at: ${PORT}`)
})