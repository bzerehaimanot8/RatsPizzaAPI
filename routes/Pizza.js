const express = require('express')
const PizzaRouter = express.Router()
const {index, create, update, destroy} = require('../controllers/Pizza.js')

//routes

//gets all pizza
PizzaRouter.get('/', index)
//create pizza
PizzaRouter.post('/', create)
//updating pizza
PizzaRouter.put('/:id', update)

//destroy pizza
PizzaRouter.delete('/:id', destroy)

module.exports = PizzaRouter