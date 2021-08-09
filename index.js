require('dotenv').config()
const express = require('express')

const router = require('./routes/routes.js')

//-------------------------------------main codes after all imports---------------------------------

const app = express()

//view engine setup
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use('/', router)

//declaring a port
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server started")
})

