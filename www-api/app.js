'use strict';

const path = require('path');
const express = require('express');
const app = express();

const routes = require('./routes/index');

/**
 * Default route
 */
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'hello, world!'
    });
});

/**
 * Custom / Sample routes
 */
app.use('/user', routes.user(express));
app.use('/dashboard', routes.dashboard(express));

/**
 * Catch all unknown API request and redirect it to `/`
 */
app.get('*', (req, res) => {
    res.redirect('/');
});

/**
 * @XXX make sure to reflect your port changes in nginx.conf
 *      if you'd like to change the Node.JS port
 */
app.listen(80, () => {
    console.log('NodeJS app listening on port 8081');
});
