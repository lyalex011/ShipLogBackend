const express = require('express')

const foodController = require('../controllers/foodController')


const router = express.Router()

//induces

router.get('/', foodController.index)

router.delete('/:id', foodController.delete)

router.get('/new', foodController.new)

router.post('/', foodController.create)

router.put('/:id', foodController.update)

router.get('/:id/edit', foodController.edit)

router.get('/:id', foodController.show)




module.exports = router