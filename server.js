const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
var port = process.env.PORT || 8080


app.use("/static", express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var routes = require('./controllers/burgers_controller.js')

app.use('/', routes)

app.listen(port)