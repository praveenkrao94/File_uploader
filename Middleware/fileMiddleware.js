const express = require('express')

const multer = require('multer')

const path = require('path')


const randomNumb = () => {
    return Math.floor(Math.random() * 10000)
}


const randomDate = () => {
    return new Date().getTime().toString()
}

const cofigStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'Upload/')
    },
    filename: (req, file, callback) => {
        callback(null, `${randomNumb()}${path.extname(file.originalname)}`)
    }

})


const uploads = multer({
    storage: cofigStorage,
    limits: {
        fileSize: 5 * 1000 * 1000
    }
}).single('file')


module.exports = uploads
