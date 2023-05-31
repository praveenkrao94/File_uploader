const File = require('../Model/model')

const fs = require('fs')



const fileController = {
    index: async (req, res) => {
        res.render('index.pug')
    },

    upload: async (req, res) => {
        res.render('fileUpload.pug')
    },



    uploadFile: async (req, res) => {
        try {

            // const data = await File(req.file)
            // res.json({ data: {} })

            let ext = await File.findOne({ originalname: req.file.originalname })

            if (ext) {
                fs.unlinkSync(req.file.path)
                return res.status(404).send("file already exists")
            }

            const data = await File.create(req.file)
            res.status(200).json({ data, msg: "file uploaded successfully" })
        }
        catch (err) {
            res.status(500).json({ msg: 'Internal Error' })
        }
    },

    readFile: async (req, res) => {
        try {
            const data = await File.find()
            res.status(200).json({ length: data.length, data })
        }
        catch (err) {
            res.status(500).json({ msg: 'internal Error' })
        }
    },

    readSingle: async (req, res) => {
        try {
            const id = req.params.id

            const exid = await File.findById({ _id: id })
            if (!exid)
                return res.status(404).send("no such Id is found")


            res.status(200).json({ data: exid })
        }
        catch (err) {
            res.status(500).json({ msg: 'internal Error' })
        }
    },


    readFile: async (req, res) => {
        try {
            const data = await File.find()
            res.status(200).json({ length: data.length, data })
        }
        catch (err) {
            res.status(500).json({ msg: 'internal Error' })
        }
    },

    removeFile: async (req, res) => {
        try {
            const id = req.params.id
            let exfile = await File.findById({ _id: id })

            if (!exfile)
                return res.status(404).json({ msg: 'File doesnt exist' })

            fs.unlinkSync(exfile.path)
            await File.findByIdAndDelete({ _id: id })
            return res.status(200).json({ msg: `File = ${exfile.filename} is been deleted Successfully` })
        }
        catch {
            res.status(500).json({ msg: 'internal error ' })
        }
    },






    pnf: async (req, res) => {
        res.render('pnf.pug')
    }

}

module.exports = fileController