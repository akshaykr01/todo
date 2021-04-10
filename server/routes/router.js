const express  = require('express');
const route = express.Router();
const services = require('../services/services');
const controller = require('../controller/controller');

route.get('/',services.home);


//API

route.post('/',controller.create);
route.get('/api/list',controller.find);
route.delete('/api/list/:id',controller.delete);


module.exports = route;