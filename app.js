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
        headers: req.headers,
        body: req.body,
    })
})

app.listen(process.env.PORT || 3000)