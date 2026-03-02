require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
	res.send('Hello, World!')
})

app.get('/x', (req, res) => {
	res.send('paramsavla06')
})

app.get('/login', (req, res) => {
	res.send("<h1>Please login at my server</h1>")
})

app.listen(process.env.PORT, () => {
	console.log(`Example app listening to port ${process.env.PORT}`)
})