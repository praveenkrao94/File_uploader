const express = require('express')

const cors = require('cors')

const connect = require('./db/Connect')

const cookieParser = require('cookie-parser')

require('dotenv').config()

const port = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(cors())

app.use(cookieParser())

app.set('view engine', 'pug')

app.set('views', './view')




app.use('/', require('./Route/fileRoute'))


app.listen(port, () => {
    connect()
    console.log(`You are listed in http://localhost:${port}`)
})











