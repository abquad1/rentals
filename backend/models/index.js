const { timeStamp } = require('console')
const mongoose = require('mongoose')
const { minLength } = require('zod')

const propertySchema =new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [2, 'Name must be at least 2 characters']
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        minLength: [5, 'Address must be at least 2 characters']

    },
    unit: {
        type: Number,
        min: [0, 'Unit cannot be negative']
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true,
        required: [true, 'City is required']
    },
    room: {
        type: String,
        trim: true,
        required: [true, 'Room is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [1, 'Price must be at least 1']
    },
    description: {
        type: String,
        min: [10, 'Description must be at least 10 characters'],
        max: [1000, 'Description must not be more than 1000 characters']
    },
    photos: {
        type: [{
            filename: {
                type: String,
                required: true
            },
            path: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            uploadedAt: {
                type: Date,
                default: Date.now
            }
        }],
        validate: {
            validator : function(photos){
                return photos.length === 1
            },
            message: 'You can only upload one photo of property'
        }
    }
}, {
    timestamps: true
})

// indexes for query performance
propertySchema.index({
    city: 1,state:1
})
propertySchema.index({
    price: 1
})
propertySchema.index({
    room: 1
})

module.exports = mongoose.model('Property',propertySchema)