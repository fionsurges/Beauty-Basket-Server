const express = require('express')
const basketRouter = express.Router()

const basketQueries = require('../basketQueries')

basketRouter.get('/', (request, response, next) => {
    basketQueries.list().then(basket => {
        response.json({basket})
    }).catch(next)
})

basketRouter.get('/:id', (request, response, next) => {
    basketQueries.read(request.params.id).then(cosmetic => {
        cosmetic 
            ? response.json({cosmetic})
            : response.status(404).json({message: 'Not found'})
    }).catch(next)
})

basketRouter.post('/', (request, response, next) => {
    basketQueries.create(request.body).then(cosmetic => {
        response.status(201).json({cosmetic})
    }).catch(next)
})

basketRouter.delete('/:id', (request, response, next) => {
    basketQueries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true})
    }).catch(next)
})

basketRouter.put('/:id', (request, response, next) => {
    basketQueries.update(request.params.id, request.body).then(cosmetic => {
        response.json({cosmetic})
    }).catch(next)  
})

module.exports = basketRouter