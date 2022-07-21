const express = require('express')
const https = require('https');

const app = express()

app.use('/api', require('./users'))
app.use('/api', require('./products'))
app.use('/api', require('./auth'))
app.use('/api', require('./sale'))
app.use('/api', require('./cart'))

module.exports = app
