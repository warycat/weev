import express from 'express'
import routes from './routes'

const PORT = process.env.PORT || 3000
const server = express()

server.use('/', routes)

server.listen(PORT, () => {
  console.log(`Server running at: ${PORT}`)
})