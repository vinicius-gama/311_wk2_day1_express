const express = require("express")
// const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 4000

const { users } = require("./state")

/* BEGIN - create routes here */
// basic routing

// app.get('/', function ( req, res)) {
// fetch from database
// load pages
// return json
// full access to request e response

// midleware function: cosnt logger = (req, res, next) process that happen betwenn request and response 

app.get("/users", (req, res) => {
	res.json(users)
})

app.get("/users/:_id", (req, res) => {
	res.json(users.filter((user) => user.id === parseInt(req.params._id)))
})

app.post("/users", (req, res) => {
	const newMember = {
			"_id": 6,
			"name": "Jake Guy",
			"occupation": "Stripper",
	}

users.push(newMember);
res.json(users);
})

 app.delete('/users/:_id', (req, res) => {
 	users.shift(); // remove the first item from the users array
 	res.send('deleted');
   });


// let counter = 0


app.post("/users", (req, res) => {
	const user = req.body
user._id = ++counter;
user.push(user)
console.log(user)
res.json(user)
})

// Whenever we receive a POST request to /users, we're incrementing the counter and assigning it as the _id property of the user object received from the client. We're then pushing this user object to the users array and logging it to the console.
// app.use(express.urlencoded({ extended: false }))

/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
