const express = require("express")
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

app.use((req, res, next) => {
	next()
})

app.get("/users", (req, res) => {
	res.json(users)
})

app.get("/users/:id", (req, res) => {})

app.post()
app.put()
app.delete()

/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
