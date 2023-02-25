const express = require('express');
const controller = require('../controllers/product.controller');


const crudRouter = express.Router();


// api endpoints

crudRouter.get('/', controller.getall)
crudRouter.post('/add', controller.add)
crudRouter.post('/update/:id', controller.update)
crudRouter.delete('/delete/:id', controller.delete)



module.exports = {crudRouter}