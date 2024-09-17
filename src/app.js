const express = require('express')
const cors = require('cors')
const jsend = require('./jsend')

const contactsRouter = require('./routes/contacts.router')
const {resourceNotFound, handleError} = require('./controllers/errors.controller')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    return res.json(jsend.success())
})

contactsRouter.setup(app)

// handle 404 error
app.use(resourceNotFound)

// error handle
app.use(handleError)

module.exports = app