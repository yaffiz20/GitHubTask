const express=require('express');
const userRoutes = require('./router/UserRout');
const app= express()
app.use(express.json())
app.use('/UserRoutr',userRoutes)
app.listen(8000,()=>{
    console.log("port 8000")
})

