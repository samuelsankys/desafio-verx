require('./config/dot-env')
const express = require( 'express')
const bodyParser = require( 'body-parser')
const morgan = require( 'morgan')
const cors = require( 'cors')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes/index')(app)


module.exports = app
