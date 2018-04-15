/*
Example recipes web API built using node and express
*/

let express = require('express')
let app = express()
let port = 3000

let recipes = []

let bodyParser = require('body-parser')
let uuidv4 = require('uuid/v4')

// allows for the parsing request.body in different formats
// application/json:
app.use(bodyParser.json())
// request format for POST requests from a HTML form
// application/x-www-form-urlencoded:
app.use(bodyParser.urlencoded({ extended: true }))

// enables CORS on the client via response headers
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// HOME
app.get('/', (request, response) => {
	response.send('Hello World')
	console.log(response)
})

// CREATE a data entry with a POST http request
app.post('/recipes', (request, response) => {
	console.log(request.body)
	response.send("CREATE: new recipe")
})

// READ all data with a GET
app.get('/recipes/all', (request, response) => {
	response.send('READING all recipes from the DB')
	console.log(response)
})

// UPDATE a data entry with a POST
app.post('/recipes/update/:id', (request, response) => {
	let id = request.params.id
	console.log(`UPDATE: recipe id ${id}`)
})
// alternative using the UPDATE http verb (not as well supported as POST in clients)
// app.update('/recipes/:id', (request, response) => {
// 	let id = request.params.id
// 	console.log(`UPDATE: recipe id ${id}`)
// })

// DELETE a data entry with a POST
app.post('/recipes/delete/:id', (request, response) => {
	let id = request.params.id
	console.log(`DELETE: recipe id ${id}`)
})
// alternative using the DELETE http verb (not as well supported as POST in clients)
// app.delete('/recipes/:id', (request, response) => {
// 	let id = request.params.id
// 	console.log(`DELETE: recipe id ${id}`)
// })

app.listen(port, () =>{
	console.log(`Express server listening on port ${port}`)
})