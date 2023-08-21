const Food = require('../models/Foods')

module.exports.new = (req, res) => {
    res.render('food/New')
}

module.exports.create = async (req, res) => {
    
    try {
        const food = await Food.create(req.body)
        res.redirect('/foods')
        console.log(food)

    } catch (error) {
        console.log(error.message)
    }
}

module.exports.index = async (req,res) => {
    try {
        const food = await Food.find()
        res.render('food/Index', {food})
        console.log('FOOD', food)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports.show = async (req,res) => {
    try {
        const element = await Food.findById(req.params.id)
        res.render('food/show', {element})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports.delete = async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id)
        res.redirect('/foods')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports.update = async (req, res) => {
    try {
        await Food.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/foods')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports.edit = async (req, res) => {
    
    try {
        const food = await Food.findById(req.params.id)
        res.render('food/Edit', { food })

    } catch (error) {
        console.log(error.message)
    }
    
}