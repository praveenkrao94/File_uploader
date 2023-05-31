const Router = require('express').Router()

const fileController = require('../Controller/fileController')

const uploadsMiddleware = require('../Middleware/fileMiddleware')

Router.get('/', uploadsMiddleware, fileController.index)

Router.get('/file/upload', uploadsMiddleware, fileController.upload)

Router.post('/api/file/upload', uploadsMiddleware, fileController.uploadFile)

Router.get('/api/file/readall', uploadsMiddleware, fileController.readFile)

Router.get('/api/file/read/:id', uploadsMiddleware, fileController.readSingle)

Router.delete('/api/file/remove/:id', uploadsMiddleware, fileController.removeFile)


Router.get('/*', uploadsMiddleware, fileController.pnf)



module.exports = Router