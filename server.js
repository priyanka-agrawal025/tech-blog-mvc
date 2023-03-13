const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const config = require('./config/connection');
const routes = require('./controllers');

const app = express();
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3001;