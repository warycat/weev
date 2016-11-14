import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import db from './database'
import pjson from '../../package.json'
import App from '../common/components/App'
// import MainStore from '../common/stores/MainStore'

const router = express.Router()

function renderFullPage(app, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>${pjson.name} server rendering</title>
        <link rel="shortcut icon" type="image/png" href="http://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d"/>
      </head>
      <body>
        <div id="app">${app}</div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

function handleRender(req, res) {
  // const store = new MainStore({
  //   title: pjson.name,
  //   userAgent: req.headers['user-agent'],
  //   version: pjson.version,
  //   params: req.query,
  // })
  const store = {}
  const app = renderToString(
    <App store={store} />
  )
  // const finalState = store.serialize()
  res.send(renderFullPage(app, {}))
}

router.get('/', handleRender)

router.get('/tables', async (req, res) => {
  res.send(await db.query('SELECT * FROM pg_tables'))
})

router.get('/version', (req, res) => {
  res.send(pjson.version)
})

router.get('/users', (req, res) => {
  db.query('SELECT * FROM weev.users').then(data => {
    res.send(data)
  })
})

router.get('/users/:username', (req, res) => {
  const username = req.params.username
  const query = `SELECT * FROM weev.users where username='${username}'`
  console.log(query)
  db.query(query).then(data => {
    res.send(data)
  })
})

module.exports = router