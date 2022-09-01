const express = require('express')
const morgan = require('morgan')
var cors = require('cors');

const { sequelize } = require('./database/models/index')
const { testConnection } = require('./database/test_connection')

const app = express()

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

testConnection(sequelize)

app.use(morgan('dev'))
app.use(require('./routes/index'))


module.exports = app;