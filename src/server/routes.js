import express from 'express'
import db from './database'
import pjson from '../../package.json'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(await db.query('SELECT * FROM pg_tables'))
})

router.get('/version', (req, res) => {
  res.json(pjson)
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