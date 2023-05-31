const mongoose = require('mongoose')


const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to Mongo Successfully')
    }
    catch (err) {
        console.log('Connetion failed', err)
    }

}


module.exports = connectdb