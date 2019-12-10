require('dotenv').config();
require('module-alias/register');

const { appInit } = require('./helpers/init-service');

appInit();
