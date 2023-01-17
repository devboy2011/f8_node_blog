const express = require('express')
const path = require('path');
const {engine} = require('express-handlebars');
const morgan = require('morgan');
const { extname } = require('path');
const port = 3000

const app = express()

app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('combined'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, ()=> console.log(`Example app listening at http:localhost:${port}`))