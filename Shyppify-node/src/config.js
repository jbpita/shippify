require('dotenv').config()

module.exports = {

    database: {
        database: process.env.SCHEMA,
        username: process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.HOST
    }

}