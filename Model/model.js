const mongoose = require('mongoose')

const fileschema = new mongoose.Schema({
    fieldname: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true,
        unique: [true, "Name already exists  "],
        trim: true
    },
    encoding: {
        type: String,
        required: true,
        trim: true
    },
    mimetype: {
        type: String,
        required: true,
        trim: true
    },
    destination: {
        type: String,
        required: true,
        trim: true
    },
    filename: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    path: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: Number,
        require: true
    },




}, {
    collection: 'files-practice',
    timestamps: true

    // {
    //   collection:---  'files': This property specifies the name of the MongoDB collection that will be used to store the data. In this case, the collection name is set to 'files'. Collections in MongoDB are similar to tables in relational databases and are used to store documents (data records).

    // timestamps: --- true: This property enables the automatic creation of two additional fields in each document: createdAt and updatedAt. When timestamps is set to true, MongoDB will automatically manage these fields, populating createdAt with the timestamp of the document's creation and updating updatedAt whenever the document is modified or updated.
    // }

})

module.exports = mongoose.model('Files', fileschema)




