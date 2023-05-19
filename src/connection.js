let {Client, Pool} = require('pg')

// const pool = `postgres://hadiantavincen:28aqWJQDEPrb@ep-steep-forest-053402-pooler.ap-southeast-1.aws.neon.tech/angular-web?sslmode=require`
// const pool = 'postgres://hadiantavincen:28aqWJQDEPrb@ep-steep-forest-053402.ap-southeast-1.aws.neon.tech/angular-web?sslmode=require'

// const db = new Client({pool})
// const db = new Pool({connectionString: `postgres://hadiantavincen:28aqWJQDEPrb@ep-steep-forest-053402-pooler.ap-southeast-1.aws.neon.tech/angular-web?sslmode=require`})
const db = new Client({
    user: 'postgres',
    database: 'angular_web',
    password: '123',
    port: 5432,
    host: 'localhost'
})

module.exports = db