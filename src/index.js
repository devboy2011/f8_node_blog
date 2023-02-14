const express = require('express');
const { engine, create} = require('express-handlebars');

const methodOverride = require('method-override');

const path = require('path');
const morgan = require('morgan');

const { extname } = require('path');
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db')

// connect to db
db.connect()

const app = express();

const hbs = create({
    extname : "handlebars",
    helpers : {
        sum : (a, b) => a + b,
    }
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'))
app.use(methodOverride('_method'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http:localhost:${port}`),
);
