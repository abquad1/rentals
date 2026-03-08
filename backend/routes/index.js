const express=require('express')
const router = express.Router()
const propertyController = require('../controller/index')
const upload = require('../middleware/upload')

router.post('/v1/property', upload.array('photos', 1), propertyController.createProperty)


// / Get all properties
// router.get('/v1/hotel', propertyController.getAllProperties)

// // Get single property by ID
// router.get('/v1/hotel/:id', propertyController.getPropertyById)

// // Update property
// router.put('/v1/hotel/:id', upload.array('photos', 10), propertyController.updateProperty)

// // Delete property
// router.delete('/v1/hotel/:id', propertyController.deleteProperty)

module.exports = router