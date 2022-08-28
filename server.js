const path = require('path');
const express = require('express');
// set up Handlebars.js as app's template engine of choice
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// importing the connection to sequelize from config/connection.js
const sequelize = require('./config/connection');

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// express.static() method is a built-in Express.js middleware function that 
// can take all of the contents of a folder and serve them as static assets. 
// Useful for front-end specific files like images, style sheets, and js files.
app.use(require('./controllers/'));

// turn on connection to db and the server
// The "sync" part means that this is Sequelize taking the models and connecting them to associated database tables. 
// NOTE* If it doesn't find a table, it'll create it.
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});