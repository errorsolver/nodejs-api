require('dotenv').config()
const {Pool, Client} = require('pg')

const DB_URI = process.env.DB_URI

const pool = new Pool({connectionString: DB_URI})

const client = new Client({connectionString: DB_URI})

module.exports = pool