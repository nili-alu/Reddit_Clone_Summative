const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require("path")
const expressValidator = require('express-validator');
const passport = require('passport');
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggeroptions = require("./config/base.js");
const localStrategy = require('./auth/local');
const jwtStrategy = require('./auth/jwt');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "build")))
app.use(express.json());
app.use(expressValidator());
app.use(morgan('common'));
app.use(passport.initialize());
const swaggerSpec = swaggerJSDoc(swaggeroptions);

app.use("/documentation", swaggerUI.serve, swaggerUI.setup(swaggerSpec, {explorer:true}));

passport.use(localStrategy);
passport.use(jwtStrategy);

require('./routes')(app);

module.exports = app;
