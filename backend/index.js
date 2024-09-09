const express=require("express")
const app=express()
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

app.post("/v1/hotel" , (req, res, next)=>{
    const {name, address,unit, city, state, room, price, description}=req.body
    if (name=== "" && address === "" && unit === "" && city === "" && state === "" && room === 0 && price === "" && description ===""){
        res.statusCode(400)
        res.json({
            message:"failed"
        })
        console.log("incomplete data")
        return
    }
    // Push to the database 
})

app.listen("5000", ()=>{
      console.log("The app is listening....")
})