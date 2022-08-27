const express = require('express');
const routes = require('./routes');
// importing the connection to sequelize from config/connection.js
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// turn on routes
app.use(routes);


// turn on connection to db and the server
// The "sync" part means that this is Sequelize taking the models and connecting them to associated database tables. 
// NOTE* If it doesn't find a table, it'll create it.
sequelize.sync({ force: false }),then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});