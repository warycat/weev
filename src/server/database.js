import fs from 'fs'
import path from 'path'
import pgp from 'pg-promise'
import { spawn } from 'child_process'

const PG_URL = process.env.PG_URL || env.PG_URL
const db = pgp()(PG_URL)
const sqlPath = path.join(__dirname, './sql/weev.sql')
const sql = fs.readFileSync(sqlPath, 'utf8')
const psql = spawn('psql', ['-f', sqlPath, PG_URL])

psql.stdout.on('data', (data) => {
  //console.log(`${data}`)
})

psql.stderr.on('data', (data) => {
 //console.error(`${data}`)
})

psql.on('close', (code) => {
  console.log(`psql exited with code ${code}`)
})

export default db