import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
	res.send('Hello, World!')
})

app.get('/x', (req, res) => {
	res.send('paramsavla06')
})

app.get('/login', (req, res) => {
	res.send("<h1>Please login at my server, just another checking round for tp</h1>")
})

app.get('/github', (req, res) => {
	res.send("<a href=\"https://github.com/paramsavla06/backend-learning\">Github link to its own repo, now seeing if it works with new commit")
})

app.get('/api/jokes', (req, res) => {
	const jokes = [
		{
			id: 1,
			title: 'A joke',
			content: 'This is a joke'
		},
		{
			id: 2,
			title: 'Another joke',
			content: 'This is another joke'
		},
		{
			id: 3,
			title: 'A third joke',
			content: 'This is a third joke'
		},
		{
			id: 4,
			title: 'A fourth joke',
			content: 'This is a fourth joke'
		},
		{
			id: 5,
			title: 'A fifth joke',
			content: 'This is a fifth joke'
		},
	]
	res.send(jokes)
})

app.listen(port, () => {
	console.log(`Example app listening to port ${port}`)
})