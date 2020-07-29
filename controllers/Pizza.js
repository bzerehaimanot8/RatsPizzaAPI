const Pizza = require('../models/Pizza.js')

//index routes - gets all pizza

const index = async (req, res) => {
try {
    const allPizza = await Pizza.find({})
    res.status(200).json(allPizza)
}
catch(error){
    res.status(400).send(error)
}
}

//create routes - creates a new pizza
const create = async (req, res) => {
try {
const newPizza = await Pizza.create(req.body)
res.status(200).json(newPizza)
}
catch(error){
res.status(400).send(error)
}
}

//update route - updates pizza

const update = async (req, res) => {
try {
  const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true})
res.status(200).json(updatedPizza)
}
catch(error) {
  res.status(400).send(error)
}
}

//destroy route - deletes a pizza

const destroy = async (req, res) => {
try {
  const deletedPizza = await Pizza.findByIdAndDelete(req.params.id)
res.status(200).json(deletedPizza)
}
catch(error) {
  res.status(400).send(error)
}
}

module.exports = {
index, create, update, destroy

}