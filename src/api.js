const db = require('../connection')
const express = require('express')
const functions = require('firebase-functions')

const app = new express()

const port = 3000
app.listen(port, () => {
    console.log(`Listen to localhost:${port}`);
})

db.connect()

app.get('/users', (req, res) => {
    db.query(`select * from user_data`, (err, result) => {
        console.log('get all users');
        if (!err) {
            res.send(result.rows)
        } else {
            console.error(err);
        }
    })
    db.end
})

app.get('', (req, res) => {
    res.send("Connected To API")
})

app.get('/users/:id', (req, res) => {
    console.log(`user id: ${req.params.id}`);
    db.query(`select * from user_data where id = ${req.params.id}`, (err, result) => {
        console.log(`get user by id`);
        console.log(`user id err: ${err}`);
        console.log(`user id res: ${result}`);
        if (!err) {
            res.send(result.rows)
        } else {
            console.error(err);
        }
    })
    db.end
})

app.get('/username/:name', (req, res) => {
    console.log(`user id: ${req.params.name}`);
    db.query(`select password from users where name = ${req.params.name}`, (err, result) => {
        console.log(`get user by id`);
        console.log(`user id err: ${err}`);
        console.log(`user id res: ${result}`);
        if (!err) {
            res.send(result.rows)
        } else {
            console.error(err);
        }
    })
    db.end
})

exports.api = functions.https.onRequest(app)