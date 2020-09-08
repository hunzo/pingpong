const ex = require('express')
const cors = require('cors')
const morgan = require('morgan')
const  bodyParser = require('body-parser')

const app = ex()

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser())

app.get('/', (req, res) => {
    res.send({
        info: "pingpong",
        headers: "/headers",
        body: "POST /body"
    })
})

app.post('/body', (req, res) => {
    res.send({
        body: req.body
    })
})

app.get('/headers', (req, res) => {
    res.send({
        headers: req.headers
    })
})

app.listen(process.env.PORT || 3000)