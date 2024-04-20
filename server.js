if (process.env) require("dotenv").config()


const express = require('express')
const bodyParser = require('body-parser')
const pokemonRoutes = require('./routes/pokemon')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 8080

app.use(cors())

app.use(bodyParser.json({ limit: '50mb' }))  // Default is usually '100kb'
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json())
app.use(express.json())

app.use('/api/pokemon', pokemonRoutes)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
