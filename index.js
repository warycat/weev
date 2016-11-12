'use strict';
const env = require('dotenv').config()
const pgp = require('pg-promise')()
const fs = require('fs')
const path = require('path')

const PG_URL = process.env.PG_URL || env.PG_URL
const db = pgp(PG_URL)
const sqlPath = path.join(__dirname, 'weev.sql')
const sql = fs.readFileSync(sqlPath, 'utf8')
const spawn = require('child_process').spawn

const psql = spawn('psql', ['-f', 'weev.sql', PG_URL])

psql.stdout.on('data', (data) => {
  console.log(`${data}`)
})

psql.stderr.on('data', (data) => {
  console.error(`${data}`)
})

psql.on('close', (code) => {
  console.log(`psql exited with code ${code}`)
})

const Hapi = require('hapi')
const PORT = process.env.PORT || 3000
const express = require('express')
const server = express()

server.listen(PORT, () => {
  console.log(server)
  console.log(`Server running at: ${PORT}`)
})

server.get('/', (req, res) => {
  db.query('SELECT * FROM weev.users').then(data => {
    res.send(data)
  })
})

server.get('/users', (req, res) => {
  db.query('SELECT * FROM weev.users').then(data => {
    res.send(data)
  })
})

server.get('/users/:username', (req, res) => {
  const username = req.params.username;
  const query = `SELECT * FROM weev.users where username='${username}'`;
  console.log(query);
  db.query(query).then(data => {
    res.send(data)
  })
})