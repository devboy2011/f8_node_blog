const express = require('express');
const { engine, create} = require('express-handlebars');

const methodOverride = require('method-override');

const path = require('path');
const morgan = require('morgan');

const { extname } = require('path');
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db')

const SortMiddleware = require('./app/middlewares/SortMiddleware')

// connect to db
db.connect()

const app = express();

const hbs = create({
    extname : "handlebars",
    helpers : {
        sum : (a, b) => a + b,
        sortable : (field, sort) => {
        
            const sortType = field === sort.column? sort.type : 'default'
        
            const icons = {
                default : "bi bi-filter-square",
                asc : "bi bi-sort-up",
                desc : "bi bi-sort-down"
            }
            const types = {
                default : 'asc',
                asc : 'desc',
                desc : 'asc'
            }
            
            const icon = icons[sortType]
            const type = types[sortType]
            
            return `<a href="?_sort&column=${field}&type=${type}">
            <i class="${icon}"></i>
          </a>`
        }
    }
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'))
app.use(methodOverride('_method'));
app.use(SortMiddleware)

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http:localhost:${port}`),
);
