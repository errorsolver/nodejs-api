const express = require('express')
const cookieParser = require('cookie-parser')

const pool = require('./database/connection')
const router = require('./routes/authRoutes')

const app = new express()

app.use(express.json())
app.use(cookieParser())
app.use(router)

const port = 3000
pool
    .connect()
    .then(() => app.listen(port), console.log(`Connected, Port: ${port}`))
    .catch(err => console.log(err))

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

// cookies
app.get('/set-cookies', (req, res) => {
    // res.setHeader('Set-Cookie', 'new-user=true')
    res.cookie('newUser', false)
    // res.cookie('haveMoney', true, {maxAge: 1000 * 60 * 60 * 24, secure: true})
    res.cookie('haveMoney', true, {maxAge: 1000 * 60 * 60 * 24, httpOnly: true /* Cant read using document.cookies, httponly clear */})
    res.send('got cookie')
})


app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies;

    console.log(cookies)
    console.log(cookies.newUser)
    res.json(cookies)
})