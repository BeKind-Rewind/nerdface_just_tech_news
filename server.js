const path = require('path');
const express = require('express');
// set up Handlebars.js as app's template engine of choice
const exphbs = require('express-handlebars');
// importing the connection to sequelize from config/connection.js
const sequelize = require('./config/connection');

// sets up an Express session and connects the session to our Sequelize db
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret', // replace with actual secret to store in .env
    cookie: {}, // tells our session to use cookies
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});