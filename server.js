require('dotenv').config()
const app = require('./src/app')


// start server
const port = process.env.PORT || 3000
app.listen(port)