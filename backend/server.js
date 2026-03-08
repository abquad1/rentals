const dotenv = require('dotenv')
const path = require('path')

// Load .env FIRST, before any modules that use env vars (e.g. Cloudinary in upload middleware)
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const express = require("express")
const cors = require("cors")
const propertyRoutes = require('./routes/index')
const connectDB = require('./database')

const app = express()

;(async () => {
    await connectDB()

// Allow requests from Next.js dev server (and other origins in dev)
app.use(cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000'] }))
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(propertyRoutes)

// app.post("/v1/hotel" , (req, res, next)=>{
//     const {name, address,unit, city, state, room, price, description}=req.body
//     if (name=== "" && address === "" && unit === "" && city === "" && state === "" && room === 0 && price === "" && description ===""){
//         res.statusCode(400)
//         res.json({
//             message:"failed"
//         })
//         console.log("incomplete data")
//         return
//     }
//     // Push to the database 
// })

app.get('/api/health', (req,res)=>{
    res.status(200).json({
        success: true,
        message: 'server is running',
        timeStamp: new Date().toISOString()
    })
})

app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("The app is listening....")
    console.log(`Server running on port ${PORT}`)
})
})()