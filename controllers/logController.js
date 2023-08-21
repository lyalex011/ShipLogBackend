const Log = require('../models/Logs')

module.exports.new = (req, res) => {
    res.render('New')
}

module.exports.create = async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const log = await Log.create(req.body)
        res.redirect('/logs')
        console.log(log)

    } catch (error) {
        console.log(error.message)
    }
}

module.exports.index = async (req,res) => {
    try {
        const log = await Log.find()
        res.render('Index', {log})
        console.log('LOG', log)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports.show = async (req,res) => {
    try {
        const element = await Log.findById(req.params.id)
        res.render('show', {element})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports.delete = async (req, res) => {
    try {
        await Log.findByIdAndDelete(req.params.id)
        res.redirect('/logs')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports.update = async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        await Log.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/logs')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports.edit = async (req, res) => {
    
    try {
        const log = await Log.findById(req.params.id)
        res.render('Edit', { log })

    } catch (error) {
        console.log(error.message)
    }
    
}