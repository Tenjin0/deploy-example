const express = require('express')
const app = express()
const port = 3100

const package = require('./package.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/version', (req, res) => {
    res.send(package.version)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})