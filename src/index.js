const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const { extname } = require('path');
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db')

// connect to db
db.connect()

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http:localhost:${port}`),
);
