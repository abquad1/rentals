const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error('MONGO_URI is not defined')
            return
        }
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected')
    } catch (error) {
        console.error('Database error:', error.message)
    }
}

module.exports = connectDB