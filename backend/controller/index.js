const Property = require('../models/index')

exports.createProperty = async(req,res)=>{
    try {
        const { name, address, unit, city, state, room, price, description } = req.body
       
        const photosFromFiles = req.files && req.files.length > 0
        ? req.files.map(file => ({
            filename: file.filename,
            path: file.path,
            url: file.path 
        }))
        : null

        const photosFromBody = req.body.photos && (Array.isArray(req.body.photos) ? req.body.photos.length > 0 : true)
            ? req.body.photos
            : null

        const photos = photosFromFiles || photosFromBody
        if (!photos || (Array.isArray(photos) && photos.length === 0)) {
            return res.status(400).json({
                success: false,
                message: 'At least one photo is required (upload files or send a photos array in JSON)'
            })
        }

        const property = await Property.create({
            name,
            address,
            unit,
            city,
            state,
            room,
            price,
            description,
            photos
        })

        res.status(201).json({
            success: true,
            message: 'Property successfully created',
            data: property

        })

    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err=>err.message)
            return  res.status(400).json({
                success: false,
                message: 'Validation failed',
                error: error.message
            })
        }

        res.status(500).json({
            success: false,
            message: 'Error creating property',
            error: error.message
        })
    }
}